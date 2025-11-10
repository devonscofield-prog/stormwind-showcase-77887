import { useState, useMemo, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
const Calculate = () => {
  useEffect(() => {
    document.title = "Calculate";
  }, []);

  const [users, setUsers] = useState<number>(50);
  const [contractLength, setContractLength] = useState<1 | 2 | 3>(3);
  const [enterpriseITPayment, setEnterpriseITPayment] = useState<"prepaid" | "annual">("prepaid");
  const [endUserPayment, setEndUserPayment] = useState<"prepaid" | "annual">("prepaid");
  const [compliancePayment, setCompliancePayment] = useState<"prepaid" | "annual">("prepaid");
  const [phishingPayment, setPhishingPayment] = useState<"prepaid" | "annual">("prepaid");
  
  // Enterprise End User product selection
  const [endUserProduct, setEndUserProduct] = useState<"enterprise" | "desktop" | "security" | "business">("enterprise");

  // Enterprise IT Pricing
  const calculateEnterpriseIT = useMemo(() => {
    let tiers;
    if (contractLength === 1) {
      // 1 Year pricing - single rate for all payment types
      tiers = [{
        max: 4,
        perUser: 990
      }, {
        max: 9,
        perUser: 890
      }, {
        max: 24,
        perUser: 790
      }, {
        max: 49,
        perUser: 690
      }, {
        max: 99,
        perUser: 590
      }, {
        max: 249,
        perUser: 490
      }, {
        max: 499,
        perUser: 390
      }, {
        max: 999,
        perUser: 290
      }, {
        max: Infinity,
        perUser: 240
      }];
    } else if (contractLength === 2) {
      // 2 Year pricing
      tiers = enterpriseITPayment === "prepaid" ? [{
        max: 4,
        perUser: 842
      }, {
        max: 9,
        perUser: 757
      }, {
        max: 24,
        perUser: 672
      }, {
        max: 49,
        perUser: 587
      }, {
        max: 99,
        perUser: 502
      }, {
        max: 249,
        perUser: 417
      }, {
        max: 499,
        perUser: 332
      }, {
        max: 999,
        perUser: 247
      }, {
        max: Infinity,
        perUser: 204
      }] : [{
        max: 4,
        perUser: 901
      }, {
        max: 9,
        perUser: 810
      }, {
        max: 24,
        perUser: 719
      }, {
        max: 49,
        perUser: 628
      }, {
        max: 99,
        perUser: 537
      }, {
        max: 249,
        perUser: 446
      }, {
        max: 499,
        perUser: 355
      }, {
        max: 999,
        perUser: 264
      }, {
        max: Infinity,
        perUser: 218
      }];
    } else {
      // 3 Year pricing
      tiers = enterpriseITPayment === "prepaid" ? [{
        max: 4,
        perUser: 792
      }, {
        max: 9,
        perUser: 712
      }, {
        max: 24,
        perUser: 632
      }, {
        max: 49,
        perUser: 390
      }, {
        max: 99,
        perUser: 290
      }, {
        max: 249,
        perUser: 240
      }, {
        max: 499,
        perUser: 190
      }, {
        max: 999,
        perUser: 140
      }, {
        max: Infinity,
        perUser: 90
      }] : [{
        max: 4,
        perUser: 810
      }, {
        max: 9,
        perUser: 730
      }, {
        max: 24,
        perUser: 651
      }, {
        max: 49,
        perUser: 490
      }, {
        max: 99,
        perUser: 390
      }, {
        max: 249,
        perUser: 290
      }, {
        max: 499,
        perUser: 240
      }, {
        max: 999,
        perUser: 190
      }, {
        max: Infinity,
        perUser: 140
      }];
    }
    const tier = tiers.find(t => users <= t.max);
    const annualCost = users * (tier?.perUser || 0);
    const totalCost = annualCost * contractLength;
    return {
      perUserYear: tier?.perUser || 0,
      annualCost,
      totalCost,
      paymentType: contractLength === 1 || enterpriseITPayment === "prepaid" ? "All Prepaid" : "Annual Payment"
    };
  }, [users, enterpriseITPayment, contractLength]);

  // Desktop Applications Pricing - follows same percentages as Enterprise End User
  const calculateDesktopApps = useMemo(() => {
    // Ratio: Desktop Apps starts at $100 vs Enterprise End User at $149 = 0.671141
    const ratio = 100 / 149;
    let tiers;
    if (contractLength === 1) {
      tiers = [{
        max: 1,
        perUser: Math.round(149 * ratio)
      }, {
        max: 50,
        perUser: Math.round(139 * ratio)
      }, {
        max: 100,
        perUser: Math.round(129 * ratio)
      }, {
        max: 500,
        perUser: Math.round(119 * ratio)
      }, {
        max: 1000,
        perUser: Math.round(109 * ratio)
      }, {
        max: 3000,
        perUser: Math.round(99 * ratio)
      }, {
        max: 5000,
        perUser: Math.round(89 * ratio)
      }, {
        max: Infinity,
        perUser: Math.round(79 * ratio)
      }];
    } else if (contractLength === 2) {
      tiers = endUserPayment === "prepaid" ? [{
        max: 1,
        perUser: Math.round(89 * ratio)
      }, {
        max: 50,
        perUser: Math.round(79 * ratio)
      }, {
        max: 100,
        perUser: Math.round(69 * ratio)
      }, {
        max: 500,
        perUser: Math.round(59 * ratio)
      }, {
        max: 1000,
        perUser: Math.round(49 * ratio)
      }, {
        max: 3000,
        perUser: Math.round(39 * ratio)
      }, {
        max: 5000,
        perUser: Math.round(36 * ratio)
      }, {
        max: Infinity,
        perUser: Math.round(32 * ratio)
      }] : [{
        max: 1,
        perUser: Math.round(99 * ratio)
      }, {
        max: 50,
        perUser: Math.round(89 * ratio)
      }, {
        max: 100,
        perUser: Math.round(79 * ratio)
      }, {
        max: 500,
        perUser: Math.round(69 * ratio)
      }, {
        max: 1000,
        perUser: Math.round(59 * ratio)
      }, {
        max: 3000,
        perUser: Math.round(49 * ratio)
      }, {
        max: 5000,
        perUser: Math.round(39 * ratio)
      }, {
        max: Infinity,
        perUser: Math.round(29 * ratio)
      }];
    } else {
      tiers = endUserPayment === "prepaid" ? [{
        max: 1,
        perUser: Math.round(69 * ratio)
      }, {
        max: 50,
        perUser: Math.round(59 * ratio)
      }, {
        max: 100,
        perUser: Math.round(49 * ratio)
      }, {
        max: 500,
        perUser: Math.round(39 * ratio)
      }, {
        max: 1000,
        perUser: Math.round(33 * ratio)
      }, {
        max: 3000,
        perUser: Math.round(26 * ratio)
      }, {
        max: 5000,
        perUser: Math.round(24 * ratio)
      }, {
        max: Infinity,
        perUser: Math.round(19 * ratio)
      }] : [{
        max: 1,
        perUser: Math.round(79 * ratio)
      }, {
        max: 50,
        perUser: Math.round(69 * ratio)
      }, {
        max: 100,
        perUser: Math.round(59 * ratio)
      }, {
        max: 500,
        perUser: Math.round(49 * ratio)
      }, {
        max: 1000,
        perUser: Math.round(39 * ratio)
      }, {
        max: 3000,
        perUser: Math.round(33 * ratio)
      }, {
        max: 5000,
        perUser: Math.round(26 * ratio)
      }, {
        max: Infinity,
        perUser: Math.round(24 * ratio)
      }];
    }
    const tier = tiers.find(t => users <= t.max);
    const annualCost = users * (tier?.perUser || 0);
    const totalCost = annualCost * contractLength;
    return {
      perUserYear: tier?.perUser || 0,
      annualCost,
      totalCost,
      paymentType: endUserPayment === "prepaid" ? "All Prepaid" : "Annual Payment"
    };
  }, [users, endUserPayment, contractLength]);

  // Security Awareness Pricing - follows same percentages as Enterprise End User
  const calculateSecurityAwareness = useMemo(() => {
    // Ratio: Security Awareness starts at $30 vs Enterprise End User at $149 = 0.201342
    const ratio = 30 / 149;
    let tiers;
    if (contractLength === 1) {
      tiers = [{
        max: 1,
        perUser: Math.round(149 * ratio)
      }, {
        max: 50,
        perUser: Math.round(139 * ratio)
      }, {
        max: 100,
        perUser: Math.round(129 * ratio)
      }, {
        max: 500,
        perUser: Math.round(119 * ratio)
      }, {
        max: 1000,
        perUser: Math.round(109 * ratio)
      }, {
        max: 3000,
        perUser: Math.round(99 * ratio)
      }, {
        max: 5000,
        perUser: Math.round(89 * ratio)
      }, {
        max: Infinity,
        perUser: Math.round(79 * ratio)
      }];
    } else if (contractLength === 2) {
      tiers = endUserPayment === "prepaid" ? [{
        max: 1,
        perUser: Math.round(89 * ratio)
      }, {
        max: 50,
        perUser: Math.round(79 * ratio)
      }, {
        max: 100,
        perUser: Math.round(69 * ratio)
      }, {
        max: 500,
        perUser: Math.round(59 * ratio)
      }, {
        max: 1000,
        perUser: Math.round(49 * ratio)
      }, {
        max: 3000,
        perUser: Math.round(39 * ratio)
      }, {
        max: 5000,
        perUser: Math.round(36 * ratio)
      }, {
        max: Infinity,
        perUser: Math.round(32 * ratio)
      }] : [{
        max: 1,
        perUser: Math.round(99 * ratio)
      }, {
        max: 50,
        perUser: Math.round(89 * ratio)
      }, {
        max: 100,
        perUser: Math.round(79 * ratio)
      }, {
        max: 500,
        perUser: Math.round(69 * ratio)
      }, {
        max: 1000,
        perUser: Math.round(59 * ratio)
      }, {
        max: 3000,
        perUser: Math.round(49 * ratio)
      }, {
        max: 5000,
        perUser: Math.round(39 * ratio)
      }, {
        max: Infinity,
        perUser: Math.round(29 * ratio)
      }];
    } else {
      tiers = endUserPayment === "prepaid" ? [{
        max: 1,
        perUser: Math.round(69 * ratio)
      }, {
        max: 50,
        perUser: Math.round(59 * ratio)
      }, {
        max: 100,
        perUser: Math.round(49 * ratio)
      }, {
        max: 500,
        perUser: Math.round(39 * ratio)
      }, {
        max: 1000,
        perUser: Math.round(33 * ratio)
      }, {
        max: 3000,
        perUser: Math.round(26 * ratio)
      }, {
        max: 5000,
        perUser: Math.round(24 * ratio)
      }, {
        max: Infinity,
        perUser: Math.round(19 * ratio)
      }] : [{
        max: 1,
        perUser: Math.round(79 * ratio)
      }, {
        max: 50,
        perUser: Math.round(69 * ratio)
      }, {
        max: 100,
        perUser: Math.round(59 * ratio)
      }, {
        max: 500,
        perUser: Math.round(49 * ratio)
      }, {
        max: 1000,
        perUser: Math.round(39 * ratio)
      }, {
        max: 3000,
        perUser: Math.round(33 * ratio)
      }, {
        max: 5000,
        perUser: Math.round(26 * ratio)
      }, {
        max: Infinity,
        perUser: Math.round(24 * ratio)
      }];
    }
    const tier = tiers.find(t => users <= t.max);
    const annualCost = users * (tier?.perUser || 0);
    const totalCost = annualCost * contractLength;
    return {
      perUserYear: tier?.perUser || 0,
      annualCost,
      totalCost,
      paymentType: endUserPayment === "prepaid" ? "All Prepaid" : "Annual Payment"
    };
  }, [users, endUserPayment, contractLength]);

  // Business Skills Pricing - follows same percentages as Enterprise End User
  const calculateBusinessSkills = useMemo(() => {
    // Ratio: Business Skills starts at $59 vs Enterprise End User at $149 = 0.395973
    const ratio = 59 / 149;
    let tiers;
    if (contractLength === 1) {
      tiers = [{
        max: 1,
        perUser: Math.round(149 * ratio)
      }, {
        max: 50,
        perUser: Math.round(139 * ratio)
      }, {
        max: 100,
        perUser: Math.round(129 * ratio)
      }, {
        max: 500,
        perUser: Math.round(119 * ratio)
      }, {
        max: 1000,
        perUser: Math.round(109 * ratio)
      }, {
        max: 3000,
        perUser: Math.round(99 * ratio)
      }, {
        max: 5000,
        perUser: Math.round(89 * ratio)
      }, {
        max: Infinity,
        perUser: Math.round(79 * ratio)
      }];
    } else if (contractLength === 2) {
      tiers = endUserPayment === "prepaid" ? [{
        max: 1,
        perUser: Math.round(89 * ratio)
      }, {
        max: 50,
        perUser: Math.round(79 * ratio)
      }, {
        max: 100,
        perUser: Math.round(69 * ratio)
      }, {
        max: 500,
        perUser: Math.round(59 * ratio)
      }, {
        max: 1000,
        perUser: Math.round(49 * ratio)
      }, {
        max: 3000,
        perUser: Math.round(39 * ratio)
      }, {
        max: 5000,
        perUser: Math.round(36 * ratio)
      }, {
        max: Infinity,
        perUser: Math.round(32 * ratio)
      }] : [{
        max: 1,
        perUser: Math.round(99 * ratio)
      }, {
        max: 50,
        perUser: Math.round(89 * ratio)
      }, {
        max: 100,
        perUser: Math.round(79 * ratio)
      }, {
        max: 500,
        perUser: Math.round(69 * ratio)
      }, {
        max: 1000,
        perUser: Math.round(59 * ratio)
      }, {
        max: 3000,
        perUser: Math.round(49 * ratio)
      }, {
        max: 5000,
        perUser: Math.round(39 * ratio)
      }, {
        max: Infinity,
        perUser: Math.round(29 * ratio)
      }];
    } else {
      tiers = endUserPayment === "prepaid" ? [{
        max: 1,
        perUser: Math.round(69 * ratio)
      }, {
        max: 50,
        perUser: Math.round(59 * ratio)
      }, {
        max: 100,
        perUser: Math.round(49 * ratio)
      }, {
        max: 500,
        perUser: Math.round(39 * ratio)
      }, {
        max: 1000,
        perUser: Math.round(33 * ratio)
      }, {
        max: 3000,
        perUser: Math.round(26 * ratio)
      }, {
        max: 5000,
        perUser: Math.round(24 * ratio)
      }, {
        max: Infinity,
        perUser: Math.round(19 * ratio)
      }] : [{
        max: 1,
        perUser: Math.round(79 * ratio)
      }, {
        max: 50,
        perUser: Math.round(69 * ratio)
      }, {
        max: 100,
        perUser: Math.round(59 * ratio)
      }, {
        max: 500,
        perUser: Math.round(49 * ratio)
      }, {
        max: 1000,
        perUser: Math.round(39 * ratio)
      }, {
        max: 3000,
        perUser: Math.round(33 * ratio)
      }, {
        max: 5000,
        perUser: Math.round(26 * ratio)
      }, {
        max: Infinity,
        perUser: Math.round(24 * ratio)
      }];
    }
    const tier = tiers.find(t => users <= t.max);
    const annualCost = users * (tier?.perUser || 0);
    const totalCost = annualCost * contractLength;
    return {
      perUserYear: tier?.perUser || 0,
      annualCost,
      totalCost,
      paymentType: endUserPayment === "prepaid" ? "All Prepaid" : "Annual Payment"
    };
  }, [users, endUserPayment, contractLength]);

  // Enterprise End User Combined Pricing (all three products) - using specific pricing table
  const calculateEnterpriseEndUser = useMemo(() => {
    let tiers;
    if (contractLength === 1) {
      // 1 Year - Upfront only
      tiers = [{
        max: 1,
        perUser: 149
      }, {
        max: 50,
        perUser: 139
      }, {
        max: 100,
        perUser: 129
      }, {
        max: 500,
        perUser: 119
      }, {
        max: 1000,
        perUser: 109
      }, {
        max: 3000,
        perUser: 99
      }, {
        max: 5000,
        perUser: 89
      }, {
        max: Infinity,
        perUser: 79
      }];
    } else if (contractLength === 2) {
      // 2 Year pricing
      tiers = endUserPayment === "prepaid" ? [{
        max: 1,
        perUser: 89
      }, {
        max: 50,
        perUser: 79
      }, {
        max: 100,
        perUser: 69
      }, {
        max: 500,
        perUser: 59
      }, {
        max: 1000,
        perUser: 49
      }, {
        max: 3000,
        perUser: 39
      }, {
        max: 5000,
        perUser: 36
      }, {
        max: Infinity,
        perUser: 32
      }] : [{
        max: 1,
        perUser: 99
      }, {
        max: 50,
        perUser: 89
      }, {
        max: 100,
        perUser: 79
      }, {
        max: 500,
        perUser: 69
      }, {
        max: 1000,
        perUser: 59
      }, {
        max: 3000,
        perUser: 49
      }, {
        max: 5000,
        perUser: 39
      }, {
        max: Infinity,
        perUser: 29
      }];
    } else {
      // 3 Year pricing
      tiers = endUserPayment === "prepaid" ? [{
        max: 1,
        perUser: 69
      }, {
        max: 50,
        perUser: 59
      }, {
        max: 100,
        perUser: 49
      }, {
        max: 500,
        perUser: 39
      }, {
        max: 1000,
        perUser: 33
      }, {
        max: 3000,
        perUser: 26
      }, {
        max: 5000,
        perUser: 24
      }, {
        max: Infinity,
        perUser: 19
      }] : [{
        max: 1,
        perUser: 79
      }, {
        max: 50,
        perUser: 69
      }, {
        max: 100,
        perUser: 59
      }, {
        max: 500,
        perUser: 49
      }, {
        max: 1000,
        perUser: 39
      }, {
        max: 3000,
        perUser: 33
      }, {
        max: 5000,
        perUser: 26
      }, {
        max: Infinity,
        perUser: 24
      }];
    }
    const tier = tiers.find(t => users <= t.max);
    const annualCost = users * (tier?.perUser || 0);
    const totalCost = annualCost * contractLength;
    return {
      perUserYear: tier?.perUser || 0,
      annualCost,
      totalCost,
      paymentType: endUserPayment === "prepaid" ? "All Prepaid" : "Annual Payment"
    };
  }, [users, endUserPayment, contractLength]);

  // Get the currently selected End User product pricing
  const calculateEndUser = useMemo(() => {
    switch (endUserProduct) {
      case "desktop":
        return calculateDesktopApps;
      case "security":
        return calculateSecurityAwareness;
      case "business":
        return calculateBusinessSkills;
      case "enterprise":
      default:
        return calculateEnterpriseEndUser;
    }
  }, [endUserProduct, calculateDesktopApps, calculateSecurityAwareness, calculateBusinessSkills, calculateEnterpriseEndUser]);

  // Compliance Pricing
  const calculateCompliance = useMemo(() => {
    let tiers;
    if (contractLength === 1) {
      tiers = compliancePayment === "prepaid" ? [{
        max: 50,
        perUser: 45.25
      }, {
        max: 100,
        perUser: 36.29
      }, {
        max: 500,
        perUser: 34.02
      }, {
        max: 1000,
        perUser: 30.24
      }, {
        max: 5000,
        perUser: 16.25
      }, {
        max: Infinity,
        perUser: 8.69
      }] : [{
        max: 50,
        perUser: 51.30
      }, {
        max: 100,
        perUser: 41.15
      }, {
        max: 500,
        perUser: 38.57
      }, {
        max: 1000,
        perUser: 34.27
      }, {
        max: 5000,
        perUser: 18.43
      }, {
        max: Infinity,
        perUser: 9.85
      }];
    } else if (contractLength === 2) {
      tiers = compliancePayment === "prepaid" ? [{
        max: 50,
        perUser: 38.72
      }, {
        max: 100,
        perUser: 32.66
      }, {
        max: 500,
        perUser: 30.62
      }, {
        max: 1000,
        perUser: 27.22
      }, {
        max: 5000,
        perUser: 14.63
      }, {
        max: Infinity,
        perUser: 7.82
      }] : [{
        max: 50,
        perUser: 43.90
      }, {
        max: 100,
        perUser: 37.01
      }, {
        max: 500,
        perUser: 34.70
      }, {
        max: 1000,
        perUser: 30.85
      }, {
        max: 5000,
        perUser: 16.58
      }, {
        max: Infinity,
        perUser: 8.86
      }];
    } else {
      tiers = compliancePayment === "prepaid" ? [{
        max: 50,
        perUser: 28.32
      }, {
        max: 100,
        perUser: 27.24
      }, {
        max: 500,
        perUser: 24.72
      }, {
        max: 1000,
        perUser: 19.80
      }, {
        max: 5000,
        perUser: 8.76
      }, {
        max: Infinity,
        perUser: 5.40
      }] : [{
        max: 50,
        perUser: 33.98
      }, {
        max: 100,
        perUser: 32.69
      }, {
        max: 500,
        perUser: 29.66
      }, {
        max: 1000,
        perUser: 23.76
      }, {
        max: 5000,
        perUser: 10.51
      }, {
        max: Infinity,
        perUser: 6.48
      }];
    }
    const tier = tiers.find(t => users <= t.max);
    const annualCost = users * (tier?.perUser || 0);
    const totalCost = annualCost * contractLength;
    return {
      perUserYear: tier?.perUser || 0,
      annualCost,
      totalCost,
      paymentType: compliancePayment === "prepaid" ? "All Prepaid" : "Annual Payment"
    };
  }, [users, compliancePayment, contractLength]);

  // StormAI Phishing Pricing - Available for all contract lengths
  const calculatePhishing = useMemo(() => {
    let tiers;
    if (contractLength === 1) {
      // 1 Year pricing
      tiers = phishingPayment === "prepaid" ? [{
        max: 50,
        perUser: 40.43
      }, {
        max: 100,
        perUser: 26.93
      }, {
        max: 500,
        perUser: 20.18
      }, {
        max: 1000,
        perUser: 16.07
      }, {
        max: 5000,
        perUser: 14.72
      }, {
        max: Infinity,
        perUser: 13.37
      }] : [{
        max: 50,
        perUser: 43.26
      }, {
        max: 100,
        perUser: 28.82
      }, {
        max: 500,
        perUser: 21.59
      }, {
        max: 1000,
        perUser: 17.19
      }, {
        max: 5000,
        perUser: 15.75
      }, {
        max: Infinity,
        perUser: 14.31
      }];
    } else if (contractLength === 2) {
      // 2 Year pricing
      tiers = phishingPayment === "prepaid" ? [{
        max: 50,
        perUser: 33.70
      }, {
        max: 100,
        perUser: 22.45
      }, {
        max: 500,
        perUser: 16.82
      }, {
        max: 1000,
        perUser: 13.39
      }, {
        max: 5000,
        perUser: 12.27
      }, {
        max: Infinity,
        perUser: 11.14
      }] : [{
        max: 50,
        perUser: 36.06
      }, {
        max: 100,
        perUser: 24.02
      }, {
        max: 500,
        perUser: 18.00
      }, {
        max: 1000,
        perUser: 14.33
      }, {
        max: 5000,
        perUser: 13.13
      }, {
        max: Infinity,
        perUser: 11.92
      }];
    } else {
      // 3 Year pricing
      tiers = phishingPayment === "prepaid" ? [{
        max: 50,
        perUser: 26.96
      }, {
        max: 100,
        perUser: 17.96
      }, {
        max: 500,
        perUser: 13.46
      }, {
        max: 1000,
        perUser: 10.71
      }, {
        max: 5000,
        perUser: 9.81
      }, {
        max: Infinity,
        perUser: 8.91
      }] : [{
        max: 50,
        perUser: 28.85
      }, {
        max: 100,
        perUser: 19.22
      }, {
        max: 500,
        perUser: 14.40
      }, {
        max: 1000,
        perUser: 11.46
      }, {
        max: 5000,
        perUser: 10.50
      }, {
        max: Infinity,
        perUser: 9.54
      }];
    }
    const tier = tiers.find(t => users <= t.max);
    const annualCost = users * (tier?.perUser || 0);
    const totalCost = annualCost * contractLength;
    return {
      perUserYear: tier?.perUser || 0,
      annualCost,
      totalCost,
      paymentType: phishingPayment === "prepaid" ? "All Prepaid" : "Annual Payment"
    };
  }, [users, contractLength, phishingPayment]);
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    }).format(amount);
  };
  return <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              StormWind Pricing Calculator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Calculate your training investment based on your team size and needs. 
              Select contract length and see pricing for all products.
            </p>
          </div>

          {/* User Input Section */}
          <Card className="mb-8 border-primary/20 shadow-lg">
            <CardHeader>
              <CardTitle>Calculate Your Price</CardTitle>
              <CardDescription>Configure your team size and contract terms to see pricing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Team Members Input */}
                <div className="space-y-2">
                  <Label htmlFor="users" className="text-lg font-semibold">Number of Team Members</Label>
                  <Input id="users" type="number" min="1" max="100000" value={users} onChange={e => {
                  const value = Math.max(1, Math.min(100000, parseInt(e.target.value) || 1));
                  setUsers(value);
                }} className="text-lg h-12 font-medium" placeholder="Enter number of users" />
                  
                </div>

                {/* Duration Buttons */}
                <div className="space-y-3">
                  <Label className="text-lg font-semibold">Duration</Label>
                  <div className="grid grid-cols-3 gap-3">
                    <button onClick={() => setContractLength(1)} className={cn("h-14 rounded-lg font-semibold text-sm tracking-wide transition-all", contractLength === 1 ? "bg-primary text-primary-foreground shadow-lg" : "bg-muted hover:bg-muted/80 text-muted-foreground")}>
                      1 YEAR
                    </button>
                    <button onClick={() => setContractLength(2)} className={cn("h-14 rounded-lg font-semibold text-sm tracking-wide transition-all", contractLength === 2 ? "bg-primary text-primary-foreground shadow-lg" : "bg-muted hover:bg-muted/80 text-muted-foreground")}>
                      2 YEARS
                    </button>
                    <button onClick={() => setContractLength(3)} className={cn("h-14 rounded-lg font-semibold text-sm tracking-wide transition-all", contractLength === 3 ? "bg-primary text-primary-foreground shadow-lg" : "bg-muted hover:bg-muted/80 text-muted-foreground")}>
                      3 YEARS
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pricing Cards */}
          <Tabs defaultValue="enterprise-it" className="space-y-6">
            <TabsList className="grid grid-cols-2 lg:grid-cols-4 h-auto p-2 gap-2 bg-muted/50">
              <TabsTrigger 
                value="enterprise-it" 
                className="py-4 px-6 text-base font-semibold border-2 border-border data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg transition-all"
              >
                Enterprise IT
              </TabsTrigger>
              <TabsTrigger 
                value="end-user" 
                className="py-4 px-6 text-base font-semibold border-2 border-border data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg transition-all"
              >
                End User
              </TabsTrigger>
              <TabsTrigger 
                value="compliance" 
                className="py-4 px-6 text-base font-semibold border-2 border-border data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg transition-all"
              >
                Compliance
              </TabsTrigger>
              <TabsTrigger 
                value="phishing" 
                className="py-4 px-6 text-base font-semibold border-2 border-border data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg transition-all"
              >
                StormAI Phishing
              </TabsTrigger>
            </TabsList>

            {/* Enterprise IT */}
            <TabsContent value="enterprise-it">
              <Card className="border-primary/30 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Enterprise IT Site License</CardTitle>
                  <CardDescription className="text-base">
                    Full access to 450+ IT courses, certifications, hands-on labs, and Cyber Range
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {(contractLength === 2 || contractLength === 3) && <div>
                      <Label className="text-base font-semibold mb-2 block">Payment Terms</Label>
                      <Select value={enterpriseITPayment} onValueChange={(value: "prepaid" | "annual") => setEnterpriseITPayment(value)}>
                        <SelectTrigger className="h-12">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="prepaid">All Prepaid (Best Value)</SelectItem>
                          <SelectItem value="annual">Annual Payment</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>}
                  
                  <div className="bg-primary/5 rounded-lg p-6 space-y-4 border border-primary/20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Per User/Year</p>
                        <p className="text-2xl font-bold text-primary">
                          {formatCurrency(calculateEnterpriseIT.perUserYear)}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {formatCurrency(calculateEnterpriseIT.perUserYear / 12)} per month
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Annual Cost</p>
                        <p className="text-2xl font-bold">
                          {formatCurrency(calculateEnterpriseIT.annualCost)}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Total {contractLength}-Year Cost</p>
                        <p className="text-3xl font-bold text-primary">
                          {formatCurrency(calculateEnterpriseIT.totalCost)}
                        </p>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-primary/10">
                      <p className="text-sm font-medium">
                        Payment Method: <span className="text-primary">{calculateEnterpriseIT.paymentType}</span>
                      </p>
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm font-semibold mb-2">What's Included:</p>
                    <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                      <li>450+ IT courses covering Microsoft, Cloud, Cybersecurity, and more</li>
                      <li>Unlimited live instructor-led classes</li>
                      <li>Certification exam prep and practice tests</li>
                      <li>Hands-on lab environments and Range access</li>
                      <li>Team admin dashboard and skill assessments</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Enterprise End User */}
            <TabsContent value="end-user">
              <Card className="border-primary/30 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Enterprise End User</CardTitle>
                  <CardDescription className="text-base">
                    Select your training package
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Product Selection Dropdown */}
                  <div>
                    <Label className="text-base font-semibold mb-2 block">Select Product</Label>
                    <Select value={endUserProduct} onValueChange={(value: "enterprise" | "desktop" | "security" | "business") => setEndUserProduct(value)}>
                      <SelectTrigger className="h-12">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-background z-50">
                        <SelectItem value="enterprise">Enterprise End User (All Categories)</SelectItem>
                        <SelectItem value="desktop">Desktop Applications</SelectItem>
                        <SelectItem value="security">Security Awareness</SelectItem>
                        <SelectItem value="business">Business Skills</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Payment Terms */}
                  {(contractLength === 2 || contractLength === 3) && (
                    <div>
                      <Label className="text-base font-semibold mb-2 block">Payment Terms</Label>
                      <Select value={endUserPayment} onValueChange={(value: "prepaid" | "annual") => setEndUserPayment(value)}>
                        <SelectTrigger className="h-12">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-background z-50">
                          <SelectItem value="prepaid">All Prepaid (Best Value)</SelectItem>
                          <SelectItem value="annual">Annual Payment</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {/* Pricing Display */}
                  <div className="bg-primary/5 rounded-lg p-6 space-y-4 border border-primary/20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Per User/Year</p>
                        <p className="text-2xl font-bold text-primary">
                          {formatCurrency(calculateEndUser.perUserYear)}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {formatCurrency(calculateEndUser.perUserYear / 12)} per month
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Annual Cost</p>
                        <p className="text-2xl font-bold">
                          {formatCurrency(calculateEndUser.annualCost)}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Total {contractLength}-Year Cost</p>
                        <p className="text-3xl font-bold text-primary">
                          {formatCurrency(calculateEndUser.totalCost)}
                        </p>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-primary/10">
                      <p className="text-sm font-medium">
                        Payment Method: <span className="text-primary">{calculateEndUser.paymentType}</span>
                      </p>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm font-semibold mb-2">What's Included:</p>
                    {endUserProduct === "enterprise" && (
                      <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                        <li>Desktop applications courses (MS Office, Teams, Power BI, etc.)</li>
                        <li>Security awareness training (Email Security, Ransomware Defense, etc.)</li>
                        <li>2,000+ business skills courses (Leadership, Marketing, Communication, etc.)</li>
                        <li>AI training for end users (Copilot, ChatGPT, and more)</li>
                        <li>Skills assessments and custom learning paths</li>
                        <li>Interactive admin dashboard and reporting</li>
                      </ul>
                    )}
                    {endUserProduct === "desktop" && (
                      <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                        <li>Comprehensive Excel, PowerPoint, Word, and Outlook courses</li>
                        <li>Power BI and data visualization training</li>
                        <li>Microsoft Teams and collaboration tools</li>
                        <li>OneNote, SharePoint, and OneDrive training</li>
                        <li>Skills assessments and progress tracking</li>
                      </ul>
                    )}
                    {endUserProduct === "security" && (
                      <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                        <li>Email Security and phishing awareness</li>
                        <li>Ransomware Defense training</li>
                        <li>Executive Security Awareness</li>
                        <li>General IT Security Awareness</li>
                        <li>Pre and post tests to track progression</li>
                      </ul>
                    )}
                    {endUserProduct === "business" && (
                      <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                        <li>Leadership and management courses</li>
                        <li>Marketing and communication training</li>
                        <li>Customer service excellence</li>
                        <li>Ethics and compliance fundamentals</li>
                        <li>Wellness and personal development</li>
                        <li>Over 2,000 courses to choose from</li>
                      </ul>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Compliance */}
            <TabsContent value="compliance">
              <Card className="border-primary/30 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Compliance Site License</CardTitle>
                  <CardDescription className="text-base">
                    Choose 6 courses from harassment prevention, workplace safety, data protection, and ethics
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {(contractLength === 2 || contractLength === 3) && (
                    <div>
                      <Label className="text-base font-semibold mb-2 block">Payment Terms</Label>
                      <Select value={compliancePayment} onValueChange={(value: "prepaid" | "annual") => setCompliancePayment(value)}>
                        <SelectTrigger className="h-12">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="prepaid">All Prepaid (Best Value)</SelectItem>
                          <SelectItem value="annual">Annual Payment</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  <div className="bg-primary/5 rounded-lg p-6 space-y-4 border border-primary/20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Per User/Year</p>
                        <p className="text-2xl font-bold text-primary">
                          {formatCurrency(calculateCompliance.perUserYear)}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {formatCurrency(calculateCompliance.perUserYear / 12)} per month
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Annual Cost</p>
                        <p className="text-2xl font-bold">
                          {formatCurrency(calculateCompliance.annualCost)}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Total {contractLength}-Year Cost</p>
                        <p className="text-3xl font-bold text-primary">
                          {formatCurrency(calculateCompliance.totalCost)}
                        </p>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-primary/10">
                      <p className="text-sm font-medium">
                        Payment Method: <span className="text-primary">{calculateCompliance.paymentType}</span>
                      </p>
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm font-semibold mb-2">What's Included:</p>
                    <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                      <li>Choose up to 6 courses from compliance categories</li>
                      <li>Meets all state & federal requirements (US & Canada)</li>
                      <li>Pre & post tests to track progression</li>
                      <li>Course assignment with automated reminders</li>
                      <li>Interactive admin dashboard</li>
                      
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* StormAI Phishing */}
            <TabsContent value="phishing">
              <Card className="border-primary/30 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">StormAI Phishing + Security Training</CardTitle>
                  <CardDescription className="text-base">
                    AI-powered phishing simulations with admin dashboard and security awareness training
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {(contractLength === 2 || contractLength === 3) && (
                    <div>
                      <Label className="text-base font-semibold mb-2 block">Payment Terms</Label>
                      <Select value={phishingPayment} onValueChange={(value: "prepaid" | "annual") => setPhishingPayment(value)}>
                        <SelectTrigger className="h-12">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="prepaid">All Prepaid (Best Value)</SelectItem>
                          <SelectItem value="annual">Annual Payment</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  <div className="bg-primary/5 rounded-lg p-6 space-y-4 border border-primary/20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Per User/Year</p>
                        <p className="text-2xl font-bold text-primary">
                          {formatCurrency(calculatePhishing.perUserYear)}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {formatCurrency(calculatePhishing.perUserYear / 12)} per month
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Annual Cost</p>
                        <p className="text-2xl font-bold">
                          {formatCurrency(calculatePhishing.annualCost)}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Total {contractLength}-Year Cost</p>
                        <p className="text-3xl font-bold text-primary">
                          {formatCurrency(calculatePhishing.totalCost)}
                        </p>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-primary/10">
                      <p className="text-sm font-medium">
                        Payment Method: <span className="text-primary">{calculatePhishing.paymentType}</span>
                      </p>
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm font-semibold mb-2">What's Included:</p>
                    <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                      <li>AI-powered phishing simulations for all users</li>
                      <li>Admin dashboard with failure tracking and reporting</li>
                      <li>StormWind End User Security Awareness Training</li>
                      <li>Automated campaign management</li>
                      <li>Real-time analytics and insights</li>
                      
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Footer Note */}
          <Card className="mt-8 bg-muted/50 border-muted">
            
          </Card>
        </div>
      </div>
    </div>;
};
export default Calculate;