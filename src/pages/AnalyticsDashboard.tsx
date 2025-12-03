import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { supabase } from '@/integrations/supabase/client';
import { Download, TrendingUp, Users, Eye, Clock, MousePointer, PlayCircle, CheckCircle, Timer } from 'lucide-react';

const COLORS = ['hsl(var(--primary))', 'hsl(var(--secondary))', 'hsl(var(--accent))', 'hsl(var(--muted))', 'hsl(var(--chart-1))', 'hsl(var(--chart-2))'];

export default function AnalyticsDashboard() {
  const [dateRange, setDateRange] = useState<'7d' | '30d' | '90d'>('30d');
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

  const fetchAnalytics = async () => {
    setLoading(true);
    
    const daysAgo = dateRange === '7d' ? 7 : dateRange === '30d' ? 30 : 90;
    const startDate = new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000).toISOString();
    const endDate = new Date().toISOString();

    try {
      const queries = [
        { queryType: 'overview', startDate, endDate },
        { queryType: 'top_pages', startDate, endDate, limit: 10 },
        { queryType: 'traffic_sources', startDate, endDate },
        { queryType: 'device_breakdown', startDate, endDate },
        { queryType: 'popular_courses', startDate, endDate, limit: 10 },
        { queryType: 'page_views_timeline', startDate, endDate },
        { queryType: 'top_interactions', startDate, endDate, limit: 10 },
        { queryType: 'video_analytics_overview', startDate, endDate },
        { queryType: 'most_watched_videos', startDate, endDate, limit: 10 },
        { queryType: 'video_completions_by_course', startDate, endDate, limit: 10 },
        { queryType: 'video_watch_timeline', startDate, endDate }
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

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container py-12">
          <div className="text-center">Loading analytics...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container pt-24 pb-12 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Analytics Dashboard</h1>
            <p className="text-muted-foreground mt-2">Comprehensive insights into your website performance</p>
          </div>
          <div className="flex gap-4">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Page Views</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-primary" />
                <div className="text-2xl font-bold">{overview?.totalPageViews?.toLocaleString() || 0}</div>
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
                <div className="text-2xl font-bold">{overview?.totalSessions?.toLocaleString() || 0}</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Avg Session Duration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <div className="text-2xl font-bold">{overview?.avgSessionDuration || 0}s</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pages Per Session</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <div className="text-2xl font-bold">{overview?.avgPagesPerSession || 0}</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Interactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <MousePointer className="w-5 h-5 text-primary" />
                <div className="text-2xl font-bold">{overview?.totalInteractions?.toLocaleString() || 0}</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <Tabs defaultValue="pages" className="space-y-6">
          <TabsList>
            <TabsTrigger value="pages">Page Performance</TabsTrigger>
            <TabsTrigger value="traffic">Traffic</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="interactions">Interactions</TabsTrigger>
            <TabsTrigger value="videos">Video Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="pages" className="space-y-6">
            {/* Page Views Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Page Views Over Time</CardTitle>
                <CardDescription>Daily page view trends</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={timeline}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="count" stroke="hsl(var(--primary))" name="Page Views" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Top Pages */}
            <Card>
              <CardHeader>
                <CardTitle>Top Pages</CardTitle>
                <CardDescription>Most visited pages</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={topPages} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="url" type="category" width={150} />
                    <Tooltip />
                    <Bar dataKey="count" fill="hsl(var(--primary))" />
                  </BarChart>
                </ResponsiveContainer>
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
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={trafficSources}
                        dataKey="count"
                        nameKey="source"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        label
                      >
                        {trafficSources.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Device Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle>Device Breakdown</CardTitle>
                  <CardDescription>Devices used by visitors</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={deviceBreakdown}
                        dataKey="count"
                        nameKey="device"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        label
                      >
                        {deviceBreakdown.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
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
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={popularCourses}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="course" angle={-45} textAnchor="end" height={100} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="views" fill="hsl(var(--primary))" name="Views" />
                    <Bar dataKey="clicks" fill="hsl(var(--secondary))" name="Clicks" />
                  </BarChart>
                </ResponsiveContainer>
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
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={topInteractions} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="interaction" type="category" width={200} />
                    <Tooltip />
                    <Bar dataKey="count" fill="hsl(var(--primary))" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Video Analytics Tab */}
          <TabsContent value="videos" className="space-y-6">
            {/* Video Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Watch Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Timer className="w-5 h-5 text-primary" />
                    <div className="text-2xl font-bold">
                      {videoOverview?.totalWatchTime 
                        ? `${Math.floor(videoOverview.totalWatchTime / 60)}m ${videoOverview.totalWatchTime % 60}s`
                        : '0m 0s'}
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
                    <div className="text-2xl font-bold">{videoOverview?.totalPlays?.toLocaleString() || 0}</div>
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
                    <div className="text-2xl font-bold">{videoOverview?.totalCompletions?.toLocaleString() || 0}</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Avg Completion Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <div className="text-2xl font-bold">{videoOverview?.avgCompletionRate || 0}%</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Video Watch Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Video Watch Activity</CardTitle>
                <CardDescription>Daily video plays and watch time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={videoTimeline}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Line yAxisId="left" type="monotone" dataKey="plays" stroke="hsl(var(--primary))" name="Plays" />
                    <Line yAxisId="right" type="monotone" dataKey="watch_time" stroke="hsl(var(--secondary))" name="Watch Time (s)" />
                  </LineChart>
                </ResponsiveContainer>
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
                    <p className="text-muted-foreground text-center py-8">No video watch data yet</p>
                  ) : (
                    mostWatchedVideos.map((video, index) => (
                      <div key={video.video_id} className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">{video.lesson_title}</p>
                          <p className="text-sm text-muted-foreground truncate">
                            {video.course_name} {video.variant_name && `• ${video.variant_name}`}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{Math.floor(video.total_watch_time / 60)}m {video.total_watch_time % 60}s</p>
                          <p className="text-sm text-muted-foreground">{video.total_plays} plays • {video.avg_percentage}% avg</p>
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
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={videoCompletionsByCourse}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="course" angle={-45} textAnchor="end" height={100} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="completion_rate" fill="hsl(var(--primary))" name="Completion %" />
                    <Bar dataKey="avg_percentage" fill="hsl(var(--secondary))" name="Avg Watch %" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
