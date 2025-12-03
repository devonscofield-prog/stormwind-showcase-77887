import { useState, useEffect, useMemo } from 'react';
import { Navigation } from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { supabase } from '@/integrations/supabase/client';
import { Download, TrendingUp, Users, Eye, Clock, MousePointer, PlayCircle, CheckCircle, Timer, BarChart3, Calendar } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type TimelineGranularity = 'daily' | 'weekly' | 'monthly';

// Aggregate timeline data by granularity
const aggregateTimeline = (data: any[], granularity: TimelineGranularity): any[] => {
  if (!data?.length || granularity === 'daily') return data;

  const aggregated: { [key: string]: { count: number; label: string } } = {};

  data.forEach(item => {
    const date = new Date(item.date);
    let key: string;
    let label: string;

    if (granularity === 'weekly') {
      // Get the start of the week (Sunday)
      const weekStart = new Date(date);
      weekStart.setDate(date.getDate() - date.getDay());
      key = weekStart.toISOString().split('T')[0];
      label = `Week of ${weekStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`;
    } else {
      // Monthly
      key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      label = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    }

    if (!aggregated[key]) {
      aggregated[key] = { count: 0, label };
    }
    aggregated[key].count += item.count || 0;
  });

  return Object.entries(aggregated)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, data]) => ({ date, count: data.count, label: data.label }));
};

// Aggregate video timeline data by granularity
const aggregateVideoTimeline = (data: any[], granularity: TimelineGranularity): any[] => {
  if (!data?.length || granularity === 'daily') return data;

  const aggregated: { [key: string]: { plays: number; watch_time: number; label: string } } = {};

  data.forEach(item => {
    const date = new Date(item.date);
    let key: string;
    let label: string;

    if (granularity === 'weekly') {
      const weekStart = new Date(date);
      weekStart.setDate(date.getDate() - date.getDay());
      key = weekStart.toISOString().split('T')[0];
      label = `Week of ${weekStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`;
    } else {
      key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      label = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    }

    if (!aggregated[key]) {
      aggregated[key] = { plays: 0, watch_time: 0, label };
    }
    aggregated[key].plays += item.plays || 0;
    aggregated[key].watch_time += item.watch_time || 0;
  });

  return Object.entries(aggregated)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, data]) => ({ date, plays: data.plays, watch_time: data.watch_time, label: data.label }));
};

// Distinct, accessible chart colors
const CHART_COLORS = [
  'hsl(var(--chart-1))',
  'hsl(var(--chart-2))',
  'hsl(var(--chart-3))',
  'hsl(var(--chart-4))',
  'hsl(var(--chart-5))',
  'hsl(var(--chart-6))',
];

// Format seconds to readable time
const formatTime = (seconds: number): string => {
  if (!seconds || seconds === 0) return '0s';
  const mins = Math.floor(seconds / 60);
  const secs = Math.round(seconds % 60);
  if (mins === 0) return `${secs}s`;
  return `${mins}m ${secs}s`;
};

// Format number with locale separators
const formatNumber = (num: number): string => {
  return (num || 0).toLocaleString();
};

// Truncate URL to just the path
const truncateUrl = (url: string): string => {
  if (!url) return 'Unknown';
  try {
    const parsed = new URL(url, 'https://example.com');
    const path = parsed.pathname === '/' ? 'Home' : parsed.pathname;
    return path.length > 30 ? path.substring(0, 30) + '...' : path;
  } catch {
    return url.length > 30 ? url.substring(0, 30) + '...' : url;
  }
};

// Custom tooltip for better readability
const CustomTooltip = ({ active, payload, label, valueFormatter }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-popover border border-border rounded-lg p-3 shadow-lg">
      <p className="font-medium text-foreground mb-2">{label}</p>
      {payload.map((entry: any, index: number) => (
        <p key={index} className="text-sm" style={{ color: entry.color }}>
          {entry.name}: {valueFormatter ? valueFormatter(entry.value) : formatNumber(entry.value)}
        </p>
      ))}
    </div>
  );
};

// Empty state component
const EmptyState = ({ message }: { message: string }) => (
  <div className="flex flex-col items-center justify-center py-12 text-center">
    <BarChart3 className="w-12 h-12 text-muted-foreground/50 mb-3" />
    <p className="text-muted-foreground">{message}</p>
    <p className="text-sm text-muted-foreground/70 mt-1">Data will appear here once tracking is active</p>
  </div>
);

export default function AnalyticsDashboard() {
  const [dateRange, setDateRange] = useState<'7d' | '30d' | '90d'>('30d');
  const [timelineGranularity, setTimelineGranularity] = useState<TimelineGranularity>('daily');
  const [overview, setOverview] = useState<any>(null);
  const [topPages, setTopPages] = useState<any[]>([]);
  const [trafficSources, setTrafficSources] = useState<any[]>([]);
  const [deviceBreakdown, setDeviceBreakdown] = useState<any[]>([]);
  const [popularCourses, setPopularCourses] = useState<any[]>([]);
  const [timeline, setTimeline] = useState<any[]>([]);
  const [topInteractions, setTopInteractions] = useState<any[]>([]);
  const [videoOverview, setVideoOverview] = useState<any>(null);
  const [mostWatchedVideos, setMostWatchedVideos] = useState<any[]>([]);
  const [videoCompletionsByCourse, setVideoCompletionsByCourse] = useState<any[]>([]);
  const [videoTimeline, setVideoTimeline] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Aggregated timeline data based on granularity
  const aggregatedTimeline = useMemo(() => 
    aggregateTimeline(timeline, timelineGranularity), 
    [timeline, timelineGranularity]
  );

  const aggregatedVideoTimeline = useMemo(() => 
    aggregateVideoTimeline(videoTimeline, timelineGranularity), 
    [videoTimeline, timelineGranularity]
  );

  const fetchAnalytics = async () => {
    setLoading(true);
    
    const daysAgo = dateRange === '7d' ? 7 : dateRange === '30d' ? 30 : 90;
    const startDate = new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000);
    startDate.setUTCHours(0, 0, 0, 0);
    
    const endDate = new Date();
    endDate.setUTCHours(23, 59, 59, 999);

    try {
      const start = startDate.toISOString();
      const end = endDate.toISOString();
      
      const queries = [
        { queryType: 'overview', startDate: start, endDate: end },
        { queryType: 'top_pages', startDate: start, endDate: end, limit: 10 },
        { queryType: 'traffic_sources', startDate: start, endDate: end },
        { queryType: 'device_breakdown', startDate: start, endDate: end },
        { queryType: 'popular_courses', startDate: start, endDate: end, limit: 10 },
        { queryType: 'page_views_timeline', startDate: start, endDate: end },
        { queryType: 'top_interactions', startDate: start, endDate: end, limit: 10 },
        { queryType: 'video_analytics_overview', startDate: start, endDate: end },
        { queryType: 'most_watched_videos', startDate: start, endDate: end, limit: 10 },
        { queryType: 'video_completions_by_course', startDate: start, endDate: end, limit: 10 },
        { queryType: 'video_watch_timeline', startDate: start, endDate: end }
      ];

      const results = await Promise.all(
        queries.map(query => 
          supabase.functions.invoke('analytics-query', { body: query })
        )
      );

      setOverview(results[0].data?.data || {});
      setTopPages(results[1].data?.data || []);
      setTrafficSources(results[2].data?.data || []);
      setDeviceBreakdown(results[3].data?.data || []);
      setPopularCourses(results[4].data?.data || []);
      setTimeline(results[5].data?.data || []);
      setTopInteractions(results[6].data?.data || []);
      setVideoOverview(results[7].data?.data || {});
      setMostWatchedVideos(results[8].data?.data || []);
      setVideoCompletionsByCourse(results[9].data?.data || []);
      setVideoTimeline(results[10].data?.data || []);
    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, [dateRange]);

  const exportToCSV = () => {
    const csv = [
      ['Metric', 'Value'],
      ['Total Page Views', overview?.totalPageViews || 0],
      ['Total Sessions', overview?.totalSessions || 0],
      ['Avg Session Duration (s)', overview?.avgSessionDuration || 0],
      ['Avg Pages Per Session', overview?.avgPagesPerSession || 0],
      ['Total Interactions', overview?.totalInteractions || 0],
      [''],
      ['Top Pages', 'Views'],
      ...topPages.map(p => [p.url, p.count])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `analytics-${dateRange}-${Date.now()}.csv`;
    a.click();
  };

  // Process top pages data for display
  const processedTopPages = topPages.map(p => ({
    ...p,
    displayUrl: truncateUrl(p.url)
  }));

  // Process traffic sources for pie chart
  const processedTrafficSources = trafficSources.map(s => ({
    ...s,
    source: s.source || 'Direct'
  }));

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container py-12">
          <div className="flex items-center justify-center h-64">
            <div className="animate-pulse text-muted-foreground">Loading analytics...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container pt-24 pb-12 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Analytics Dashboard</h1>
            <p className="text-muted-foreground mt-2">Comprehensive insights into your website performance</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Tabs value={dateRange} onValueChange={(v) => setDateRange(v as any)}>
              <TabsList>
                <TabsTrigger value="7d">7 Days</TabsTrigger>
                <TabsTrigger value="30d">30 Days</TabsTrigger>
                <TabsTrigger value="90d">90 Days</TabsTrigger>
              </TabsList>
            </Tabs>
            <Button onClick={exportToCSV} variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Page Views</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-primary" />
                <div className="text-xl sm:text-2xl font-bold">{formatNumber(overview?.totalPageViews)}</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <div className="text-xl sm:text-2xl font-bold">{formatNumber(overview?.totalSessions)}</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Avg Session</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <div className="text-xl sm:text-2xl font-bold">{formatTime(overview?.avgSessionDuration)}</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pages/Session</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <div className="text-xl sm:text-2xl font-bold">{overview?.avgPagesPerSession || 0}</div>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-2 md:col-span-1">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Interactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <MousePointer className="w-5 h-5 text-primary" />
                <div className="text-xl sm:text-2xl font-bold">{formatNumber(overview?.totalInteractions)}</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <Tabs defaultValue="pages" className="space-y-6">
          <TabsList className="flex-wrap h-auto gap-1">
            <TabsTrigger value="pages">Page Performance</TabsTrigger>
            <TabsTrigger value="traffic">Traffic</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="interactions">Interactions</TabsTrigger>
            <TabsTrigger value="videos">Video Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="pages" className="space-y-6">
            {/* Page Views Timeline */}
            <Card>
              <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <CardTitle>Page Views Over Time</CardTitle>
                  <CardDescription>
                    {timelineGranularity === 'daily' ? 'Daily' : timelineGranularity === 'weekly' ? 'Weekly' : 'Monthly'} page view trends
                  </CardDescription>
                </div>
                <Select value={timelineGranularity} onValueChange={(v) => setTimelineGranularity(v as TimelineGranularity)}>
                  <SelectTrigger className="w-[140px]">
                    <Calendar className="w-4 h-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </CardHeader>
              <CardContent>
                {aggregatedTimeline.length === 0 ? (
                  <EmptyState message="No page view data yet" />
                ) : (
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={aggregatedTimeline}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis 
                        dataKey="date" 
                        tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                        tickFormatter={(value, index) => {
                          const item = aggregatedTimeline[index];
                          if (item?.label) return item.label;
                          return new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                        }}
                      />
                      <YAxis tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="count" 
                        stroke="hsl(var(--chart-1))" 
                        strokeWidth={2}
                        dot={{ fill: 'hsl(var(--chart-1))', r: 4 }}
                        name="Page Views" 
                        isAnimationActive={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                )}
              </CardContent>
            </Card>

            {/* Top Pages */}
            <Card>
              <CardHeader>
                <CardTitle>Top Pages</CardTitle>
                <CardDescription>Most visited pages</CardDescription>
              </CardHeader>
              <CardContent>
                {processedTopPages.length === 0 ? (
                  <EmptyState message="No page data yet" />
                ) : (
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={processedTopPages} layout="vertical" margin={{ left: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis type="number" tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
                      <YAxis 
                        dataKey="displayUrl" 
                        type="category" 
                        width={180} 
                        tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar dataKey="count" fill="hsl(var(--chart-1))" radius={[0, 4, 4, 0]} name="Views" />
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="traffic" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Traffic Sources */}
              <Card>
                <CardHeader>
                  <CardTitle>Traffic Sources</CardTitle>
                  <CardDescription>Where your visitors come from</CardDescription>
                </CardHeader>
                <CardContent>
                  {processedTrafficSources.length === 0 ? (
                    <EmptyState message="No traffic source data yet" />
                  ) : (
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={processedTrafficSources}
                          dataKey="count"
                          nameKey="source"
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          innerRadius={40}
                          paddingAngle={2}
                          label={({ source, percent }) => `${source} (${(percent * 100).toFixed(0)}%)`}
                          labelLine={{ stroke: 'hsl(var(--muted-foreground))', strokeWidth: 1 }}
                        >
                          {processedTrafficSources.map((_, index) => (
                            <Cell 
                              key={`cell-${index}`} 
                              fill={CHART_COLORS[index % CHART_COLORS.length]}
                              stroke="hsl(var(--background))"
                              strokeWidth={2}
                            />
                          ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                      </PieChart>
                    </ResponsiveContainer>
                  )}
                </CardContent>
              </Card>

              {/* Device Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle>Device Breakdown</CardTitle>
                  <CardDescription>Devices used by visitors</CardDescription>
                </CardHeader>
                <CardContent>
                  {deviceBreakdown.length === 0 ? (
                    <EmptyState message="No device data yet" />
                  ) : (
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={deviceBreakdown}
                          dataKey="count"
                          nameKey="device"
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          innerRadius={40}
                          paddingAngle={2}
                          label={({ device, percent }) => `${device || 'Unknown'} (${(percent * 100).toFixed(0)}%)`}
                          labelLine={{ stroke: 'hsl(var(--muted-foreground))', strokeWidth: 1 }}
                        >
                          {deviceBreakdown.map((_, index) => (
                            <Cell 
                              key={`cell-${index}`} 
                              fill={CHART_COLORS[index % CHART_COLORS.length]}
                              stroke="hsl(var(--background))"
                              strokeWidth={2}
                            />
                          ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                      </PieChart>
                    </ResponsiveContainer>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Popular Courses</CardTitle>
                <CardDescription>Most viewed and clicked courses</CardDescription>
              </CardHeader>
              <CardContent>
                {popularCourses.length === 0 ? (
                  <EmptyState message="No course analytics yet" />
                ) : (
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={popularCourses} margin={{ bottom: 80 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis 
                        dataKey="course" 
                        angle={-45} 
                        textAnchor="end" 
                        height={100}
                        tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }}
                        interval={0}
                      />
                      <YAxis tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend wrapperStyle={{ paddingTop: 20 }} />
                      <Bar dataKey="views" fill="hsl(var(--chart-1))" name="Views" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="clicks" fill="hsl(var(--chart-2))" name="Clicks" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="interactions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Interactions</CardTitle>
                <CardDescription>Most common user interactions</CardDescription>
              </CardHeader>
              <CardContent>
                {topInteractions.length === 0 ? (
                  <EmptyState message="No interaction data yet" />
                ) : (
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={topInteractions} layout="vertical" margin={{ left: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis type="number" tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
                      <YAxis 
                        dataKey="interaction" 
                        type="category" 
                        width={200}
                        tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar dataKey="count" fill="hsl(var(--chart-1))" radius={[0, 4, 4, 0]} name="Count" />
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Video Analytics Tab */}
          <TabsContent value="videos" className="space-y-6">
            {/* Video Overview Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Watch Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Timer className="w-5 h-5 text-primary" />
                    <div className="text-xl sm:text-2xl font-bold">
                      {formatTime(videoOverview?.totalWatchTime || 0)}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Plays</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <PlayCircle className="w-5 h-5 text-primary" />
                    <div className="text-xl sm:text-2xl font-bold">{formatNumber(videoOverview?.totalPlays)}</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Completions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <div className="text-xl sm:text-2xl font-bold">{formatNumber(videoOverview?.totalCompletions)}</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Avg Completion</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <div className="text-xl sm:text-2xl font-bold">{videoOverview?.avgCompletionRate || 0}%</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Video Watch Timeline */}
            <Card>
              <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <CardTitle>Video Watch Activity</CardTitle>
                  <CardDescription>
                    {timelineGranularity === 'daily' ? 'Daily' : timelineGranularity === 'weekly' ? 'Weekly' : 'Monthly'} video plays and watch time
                  </CardDescription>
                </div>
                <Select value={timelineGranularity} onValueChange={(v) => setTimelineGranularity(v as TimelineGranularity)}>
                  <SelectTrigger className="w-[140px]">
                    <Calendar className="w-4 h-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </CardHeader>
              <CardContent>
                {aggregatedVideoTimeline.length === 0 ? (
                  <EmptyState message="No video watch data yet" />
                ) : (
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={aggregatedVideoTimeline}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis 
                        dataKey="date"
                        tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                        tickFormatter={(value, index) => {
                          const item = aggregatedVideoTimeline[index];
                          if (item?.label) return item.label;
                          return new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                        }}
                      />
                      <YAxis yAxisId="left" tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
                      <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
                      <Tooltip 
                        content={({ active, payload, label }) => {
                          if (!active || !payload?.length) return null;
                          const item = aggregatedVideoTimeline.find(d => d.date === label);
                          return (
                            <div className="bg-popover border border-border rounded-lg p-3 shadow-lg">
                              <p className="font-medium text-foreground mb-2">
                                {item?.label || new Date(label).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                              </p>
                              {payload.map((entry: any, index: number) => (
                                <p key={index} className="text-sm" style={{ color: entry.color }}>
                                  {entry.name}: {entry.name.includes('Time') ? formatTime(entry.value) : formatNumber(entry.value)}
                                </p>
                              ))}
                            </div>
                          );
                        }}
                      />
                      <Legend />
                      <Line 
                        yAxisId="left" 
                        type="monotone" 
                        dataKey="plays" 
                        stroke="hsl(var(--chart-1))" 
                        strokeWidth={2}
                        name="Plays"
                        isAnimationActive={false}
                      />
                      <Line 
                        yAxisId="right" 
                        type="monotone" 
                        dataKey="watch_time" 
                        stroke="hsl(var(--chart-2))" 
                        strokeWidth={2}
                        name="Watch Time (s)"
                        isAnimationActive={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                )}
              </CardContent>
            </Card>

            {/* Most Watched Videos */}
            <Card>
              <CardHeader>
                <CardTitle>Most Watched Videos</CardTitle>
                <CardDescription>Videos ranked by total watch time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mostWatchedVideos.length === 0 ? (
                    <EmptyState message="No video watch data yet" />
                  ) : (
                    mostWatchedVideos.map((video, index) => (
                      <div key={video.video_id} className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">{video.lesson_title || 'Unknown Video'}</p>
                          <p className="text-sm text-muted-foreground truncate">
                            {video.course_name} {video.variant_name && `• ${video.variant_name}`}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{formatTime(video.total_watch_time)}</p>
                          <p className="text-sm text-muted-foreground">
                            {formatNumber(video.total_plays)} plays • {video.avg_percentage || 0}% avg
                          </p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Completion Rates by Course */}
            <Card>
              <CardHeader>
                <CardTitle>Completion Rates by Course</CardTitle>
                <CardDescription>Video completion rates per course</CardDescription>
              </CardHeader>
              <CardContent>
                {videoCompletionsByCourse.length === 0 ? (
                  <EmptyState message="No completion data yet" />
                ) : (
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={videoCompletionsByCourse} margin={{ bottom: 80 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis 
                        dataKey="course" 
                        angle={-45} 
                        textAnchor="end" 
                        height={100}
                        tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }}
                        interval={0}
                      />
                      <YAxis 
                        tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                        domain={[0, 100]}
                        tickFormatter={(value) => `${value}%`}
                      />
                      <Tooltip 
                        content={({ active, payload, label }) => {
                          if (!active || !payload?.length) return null;
                          return (
                            <div className="bg-popover border border-border rounded-lg p-3 shadow-lg">
                              <p className="font-medium text-foreground mb-2">{label}</p>
                              {payload.map((entry: any, index: number) => (
                                <p key={index} className="text-sm" style={{ color: entry.color }}>
                                  {entry.name}: {entry.value}%
                                </p>
                              ))}
                            </div>
                          );
                        }}
                      />
                      <Legend wrapperStyle={{ paddingTop: 20 }} />
                      <Bar dataKey="completion_rate" fill="hsl(var(--chart-1))" name="Completion %" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="avg_percentage" fill="hsl(var(--chart-2))" name="Avg Watch %" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
