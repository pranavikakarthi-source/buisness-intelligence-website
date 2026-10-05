// Intelligence Datasets for dynamic switching
const datasets = {
  revenue: {
    title: "Revenue & forecast",
    badge: "7 months",
    barTitle: "Sales by channel",
    // Coordinates for SVG viewBox 0 0 340 130
    // [x, y] coordinates for solid actual line (first 4 pts) and forecast line (all pts)
    points: [
      { x: 10, y: 92, val: "$3.4M", month: "Feb" },
      { x: 74, y: 88, val: "$3.8M", month: "Mar" },
      { x: 138, y: 72, val: "$4.2M", month: "Apr" },
      { x: 202, y: 56, val: "$4.5M", month: "May" },
      { x: 266, y: 44, val: "$4.82M", month: "Jun" },
      { x: 330, y: 32, val: "$5.3M (Est)", month: "Jul" }
    ],
    bars: [
      { height: "76%", label: "Partner" },
      { height: "62%", label: "Digital" },
      { height: "38%", label: "Other" }
    ],
    metrics: {
      val1: "$4.82M", growth1: "8.4%",
      val2: "12.6%", growth2: "2.1%",
      val3: "18,420", growth3: "6.8%",
      val4: "94.2", growth4: "3.7%"
    }
  },
  conversion: {
    title: "Conversion trajectory",
    badge: "Funnel stats",
    barTitle: "Conversion by channel",
    points: [
      { x: 10, y: 105, val: "8.2%", month: "Feb" },
      { x: 74, y: 95, val: "9.5%", month: "Mar" },
      { x: 138, y: 82, val: "10.4%", month: "Apr" },
      { x: 202, y: 64, val: "11.8%", month: "May" },
      { x: 266, y: 50, val: "12.6%", month: "Jun" },
      { x: 330, y: 38, val: "14.1% (Est)", month: "Jul" }
    ],
    bars: [
      { height: "54%", label: "Partner" },
      { height: "88%", label: "Digital" },
      { height: "42%", label: "Other" }
    ],
    metrics: {
      val1: "$5.10M", growth1: "9.2%",
      val2: "14.8%", growth2: "4.5%",
      val3: "21,150", growth3: "8.1%",
      val4: "96.4", growth4: "5.2%"
    }
  },
  customers: {
    title: "Active customer growth",
    badge: "Retention: 92%",
    barTitle: "Acquisition source",
    points: [
      { x: 10, y: 110, val: "12.1K", month: "Feb" },
      { x: 74, y: 98, val: "13.8K", month: "Mar" },
      { x: 138, y: 80, val: "15.2K", month: "Apr" },
      { x: 202, y: 60, val: "16.9K", month: "May" },
      { x: 266, y: 46, val: "18.4K", month: "Jun" },
      { x: 330, y: 28, val: "20.5K (Est)", month: "Jul" }
    ],
    bars: [
      { height: "45%", label: "Partner" },
      { height: "92%", label: "Digital" },
      { height: "64%", label: "Other" }
    ],
    metrics: {
      val1: "$5.45M", growth1: "11.2%",
      val2: "15.3%", growth2: "3.4%",
      val3: "24,890", growth3: "14.2%",
      val4: "97.8", growth4: "4.1%"
    }
  },
  performance: {
    title: "System & AI accuracy",
    badge: "SLA: 99.9%",
    barTitle: "Efficiency index",
    points: [
      { x: 10, y: 85, val: "88.5", month: "Feb" },
      { x: 74, y: 78, val: "90.2", month: "Mar" },
      { x: 138, y: 68, val: "91.8", month: "Apr" },
      { x: 202, y: 52, val: "93.4", month: "May" },
      { x: 266, y: 40, val: "94.2", month: "Jun" },
      { x: 330, y: 22, val: "98.0 (Est)", month: "Jul" }
    ],
    bars: [
      { height: "82%", label: "Partner" },
      { height: "78%", label: "Digital" },
      { height: "90%", label: "Other" }
    ],
    metrics: {
      val1: "$4.95M", growth1: "7.8%",
      val2: "13.4%", growth2: "2.8%",
      val3: "19,200", growth3: "7.5%",
      val4: "98.5", growth4: "6.2%"
    }
  }
};

// Flow Pipeline stages mapping
const flowDataMap = {
  data: "revenue",
  analytics: "conversion",
  insights: "customers",
  prediction: "performance",
  decision: "revenue"
};

// DOM Elements
const dashTitle = document.getElementById("dashTitle");
const lineChartTitle = document.getElementById("lineChartTitle");
const chartTimeframe = document.getElementById("chartTimeframe");
const barChartTitle = document.getElementById("barChartTitle");
const chartSolidLine = document.getElementById("chartSolidLine");
const chartForecastLine = document.getElementById("chartForecastLine");
const chartArea = document.getElementById("chartArea");
const chartPoints = document.getElementById("chartPoints");
const chartTooltip = document.getElementById("chartTooltip");

const kpiItems = document.querySelectorAll(".kpi-item");
const flowPills = document.querySelectorAll(".flow-pill");

// Helper to generate SVG cubic Bezier curve path
function createSmoothPath(points) {
  if (points.length === 0) return "";
  let path = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i === 0 ? i : i - 1];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] || p2;

    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;

    path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
  }
  return path;
}

// Update the Dashboard visual state
function renderDashboard(metricKey) {
  const data = datasets[metricKey] || datasets.revenue;

  // 1. Update Headings & Badges
  lineChartTitle.textContent = data.title;
  chartTimeframe.textContent = data.badge;
  barChartTitle.textContent = data.barTitle;

  // 2. Animate KPI numbers
  animateValue("kpiVal1", data.metrics.val1);
  animateValue("kpiVal2", data.metrics.val2);
  animateValue("kpiVal3", data.metrics.val3);
  animateValue("kpiVal4", data.metrics.val4);
  document.getElementById("kpiGrowth1").textContent = data.metrics.growth1;
  document.getElementById("kpiGrowth2").textContent = data.metrics.growth2;
  document.getElementById("kpiGrowth3").textContent = data.metrics.growth3;
  document.getElementById("kpiGrowth4").textContent = data.metrics.growth4;

  // 3. Update Line Chart Paths
  const fullPath = createSmoothPath(data.points);

  // Solid line up to 5th point
  const solidPoints = data.points.slice(0, 5);
  const solidPath = createSmoothPath(solidPoints);
  chartSolidLine.setAttribute("d", solidPath);
  chartForecastLine.setAttribute("d", fullPath);

  // Area path (close along bottom at y=130)
  const lastPt = data.points[data.points.length - 1];
  const firstPt = data.points[0];
  const areaPath = `${fullPath} L ${lastPt.x} 130 L ${firstPt.x} 130 Z`;
  chartArea.setAttribute("d", areaPath);

  // 4. Render Data Points
  chartPoints.innerHTML = "";
  data.points.forEach((pt, idx) => {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", pt.x);
    circle.setAttribute("cy", pt.y);
    circle.setAttribute("r", idx === 4 ? "4.5" : "3.5");
    circle.setAttribute("fill", idx >= 4 ? "#22d3ee" : "#00bcd4");
    circle.setAttribute("stroke", "#071220");
    circle.setAttribute("stroke-width", "2");
    circle.setAttribute("class", "chart-point");

    // Hover tooltip
    circle.addEventListener("mouseenter", (e) => {
      chartTooltip.textContent = `${pt.month}: ${pt.val}`;
      chartTooltip.style.opacity = "1";
      chartTooltip.style.left = `${pt.x}px`;
      chartTooltip.style.top = `${pt.y}px`;
    });

    circle.addEventListener("mouseleave", () => {
      chartTooltip.style.opacity = "0";
    });

    chartPoints.appendChild(circle);
  });

  // 5. Update Bars
  data.bars.forEach((bar, idx) => {
    const barEl = document.getElementById(`bar${idx + 1}`);
    const lblEl = document.getElementById(`barLbl${idx + 1}`);
    if (barEl) {
      barEl.style.height = bar.height;
    }
    if (lblEl) {
      lblEl.textContent = bar.label;
    }
  });
}

// Gentle text pop animation
function animateValue(id, newValue) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.transform = "scale(1.08)";
  el.textContent = newValue;
  setTimeout(() => {
    el.style.transform = "scale(1)";
  }, 180);
}

// Attach KPI Card Click Listeners
kpiItems.forEach((item) => {
  item.addEventListener("click", () => {
    kpiItems.forEach((k) => k.classList.remove("active"));
    item.classList.add("active");
    const metric = item.getAttribute("data-metric");
    renderDashboard(metric);
  });
});

// Attach Flow Stepper Click Listeners
flowPills.forEach((pill) => {
  pill.addEventListener("click", () => {
    flowPills.forEach((p) => p.classList.remove("active"));
    pill.classList.add("active");
    const stage = pill.getAttribute("data-flow");
    const mappedMetric = flowDataMap[stage] || "revenue";

    // Update active KPI card too
    kpiItems.forEach((k) => {
      if (k.getAttribute("data-metric") === mappedMetric) {
        k.classList.add("active");
      } else {
        k.classList.remove("active");
      }
    });

    renderDashboard(mappedMetric);
  });
});

// Title click rotates dashboard themes
let currentDomainIdx = 0;
const domainTitles = [
  "Business Intelligence",
  "Predictive Intelligence",
  "Customer Intelligence",
  "Decision Intelligence"
];
const domainMetrics = ["revenue", "conversion", "customers", "performance"];

const titleWrap = document.querySelector(".dash-title-row");
if (titleWrap) {
  titleWrap.style.cursor = "pointer";
  titleWrap.addEventListener("click", () => {
    currentDomainIdx = (currentDomainIdx + 1) % domainTitles.length;
    dashTitle.textContent = domainTitles[currentDomainIdx];
    const metric = domainMetrics[currentDomainIdx];

    kpiItems.forEach((k) => {
      if (k.getAttribute("data-metric") === metric) {
        k.classList.add("active");
      } else {
        k.classList.remove("active");
      }
    });

    renderDashboard(metric);
  });
}

// Chevron items click interaction
const chevronItems = document.querySelectorAll(".chevron-item");
chevronItems.forEach((item) => {
  item.addEventListener("click", () => {
    chevronItems.forEach((c) => c.classList.remove("is-selected"));
    item.classList.add("is-selected");
  });
});

// ==========================================================================
// Capabilities Deep-Dive Data (Matches Images 2, 3, 4, 5)
// ==========================================================================
const capabilitiesData = {
  "data-analytics": {
    name: "Data Analytics",
    headline: "Analyze business data to uncover patterns, trends, relationships, and opportunities.",
    items: [
      {
        title: "Descriptive analytics",
        desc: "Understand what happened and how the business performed, through reports and KPIs."
      },
      {
        title: "Diagnostic analytics",
        desc: "Find out why outcomes happened and identify root causes."
      },
      {
        title: "Exploratory data analysis",
        desc: "Uncover hidden patterns, relationships, and anomalies in your datasets."
      },
      {
        title: "Statistical analysis",
        desc: "Validate business assumptions with reliable statistical evidence."
      },
      {
        title: "Trend analysis",
        desc: "Spot growth, decline, seasonality, and emerging patterns over time."
      },
      {
        title: "Customer analytics",
        desc: "Study behavior, preferences, and purchases to support segmentation and retention."
      },
      {
        title: "Operational analytics",
        desc: "Find inefficiencies, bottlenecks, and performance gaps in your processes."
      }
    ]
  },
  "data-science": {
    name: "Data Science & Advanced Analytics",
    headline: "Apply statistical modeling and machine learning to solve complex problems and predict outcomes.",
    items: [
      {
        title: "Machine learning",
        desc: "Models that learn from history for classification, forecasting, and recommendations."
      },
      {
        title: "Predictive modeling",
        desc: "Estimate future outcomes such as demand, customer behavior, and risk."
      },
      {
        title: "Regression analysis",
        desc: "Measure how one factor influences another in pricing, revenue, and demand."
      },
      {
        title: "Classification",
        desc: "Group data into set categories for fraud, churn, and risk use cases."
      },
      {
        title: "Clustering",
        desc: "Discover natural customer, product, and transaction segments."
      },
      {
        title: "Forecasting",
        desc: "Predict sales, demand, inventory, and finances from historical patterns."
      },
      {
        title: "Anomaly detection",
        desc: "Flag unusual patterns that point to fraud, system issues, or surprises."
      },
      {
        title: "Recommendation systems",
        desc: "Generate personalized products, content, and next-best actions."
      }
    ]
  },
  "business-intelligence": {
    name: "Business Intelligence",
    headline: "Turn business data into reliable reports, KPIs, and dashboards that help you monitor the business.",
    items: [
      {
        title: "BI dashboards",
        desc: "One interactive view of metrics, KPIs, and trends."
      },
      {
        title: "KPI development",
        desc: "Define measurable indicators aligned to business goals."
      },
      {
        title: "Management reporting",
        desc: "Clear performance summaries for leadership teams."
      },
      {
        title: "Interactive reports",
        desc: "Filter, compare, and drill down into complex data."
      },
      {
        title: "Self-service BI",
        desc: "Let business users explore trusted data with consistency and governance."
      },
      {
        title: "Performance monitoring",
        desc: "Track KPIs continuously and see gaps early."
      },
      {
        title: "Real-time analytics",
        desc: "Respond faster using continuously updated data."
      }
    ]
  },
  "decision-intelligence": {
    name: "Decision Intelligence",
    headline: "Combine data, analytics, AI, and business context to support complex decisions and identify actions.",
    items: [
      {
        title: "Decision modeling",
        desc: "Structure decisions using objectives, rules, constraints, and models."
      },
      {
        title: "Scenario analysis",
        desc: "Compare scenarios to understand potential business impact."
      },
      {
        title: "What-if analysis",
        desc: "Test how changes in pricing, demand, or costs affect outcomes."
      },
      {
        title: "Prescriptive analytics",
        desc: "Go beyond prediction to identify actions that improve outcomes."
      },
      {
        title: "Optimization",
        desc: "Allocate resources and manage constraints for better efficiency and cost."
      },
      {
        title: "Recommendation engines",
        desc: "Deliver relevant recommendations to customers or business teams."
      },
      {
        title: "Risk-based decision support",
        desc: "Weigh risks, probabilities, and impacts before big decisions."
      }
    ]
  },
  "data-viz": {
    name: "Data Visualization & Storytelling",
    headline: "Turn complex datasets into clear visuals that are easier to understand, communicate, and act on.",
    items: [
      {
        title: "Interactive dashboards",
        desc: "Explore KPIs, trends, and charts through visual interfaces."
      },
      {
        title: "Executive dashboards",
        desc: "A concise view of critical KPIs for leadership."
      },
      {
        title: "KPI visualization",
        desc: "Track targets, progress, and gaps at a glance."
      },
      {
        title: "Charts & reports",
        desc: "Structured charts that make comparisons and trends clear."
      },
      {
        title: "Trend visualization",
        desc: "Show growth, decline, and seasonality over time."
      },
      {
        title: "Geographic visualization",
        desc: "Map regional performance, customers, and market opportunity."
      },
      {
        title: "Data storytelling",
        desc: "Combine data, visuals, and context into a clear story."
      }
    ]
  }
};

// DOM Elements for Full-Page Capability Detail View
const capabilityModalPage = document.getElementById("capabilityModalPage");
const modalBackBtn = document.getElementById("modalBackBtn");
const modalBottomBackBtn = document.getElementById("modalBottomBackBtn");
const closeCapabilityModal = document.getElementById("closeCapabilityModal");
const modalActiveBadge = document.getElementById("modalActiveBadge");
const capDetailTitle = document.getElementById("capDetailTitle");
const explorerHeadline = document.getElementById("explorerHeadline");
const explorerCardsGrid = document.getElementById("explorerCardsGrid");

// Render Capability Detail Content
function renderCapabilityDetail(key) {
  const data = capabilitiesData[key] || capabilitiesData["data-analytics"];

  // Update Header & Badge
  if (modalActiveBadge) {
    modalActiveBadge.textContent = data.name;
  }
  if (capDetailTitle) {
    capDetailTitle.textContent = data.name;
  }
  if (explorerHeadline) {
    explorerHeadline.textContent = data.headline;
  }

  // Update Active Tab Pill
  const modalTabPills = document.getElementById("modalTabPills");
  if (modalTabPills) {
    modalTabPills.innerHTML = `<button class="modal-tab-pill active" data-tab="${key}">${data.name}</button>`;
  }

  // Render Sub-Cards
  if (explorerCardsGrid) {
    explorerCardsGrid.innerHTML = "";
    data.items.forEach((item) => {
      const card = document.createElement("div");
      card.className = "deep-subcard";
      card.innerHTML = `
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
      `;
      explorerCardsGrid.appendChild(card);
    });
  }
}

// Attach Tab Pill click listeners
const modalTabPills = document.querySelectorAll(".modal-tab-pill");
modalTabPills.forEach((pill) => {
  pill.addEventListener("click", () => {
    const tabKey = pill.getAttribute("data-tab");
    if (tabKey) {
      renderCapabilityDetail(tabKey);
    }
  });
});

// Open Capability Detail View
function openCapabilityDetailFunc(key) {
  renderCapabilityDetail(key);
  if (capabilityModalPage) {
    capabilityModalPage.classList.add("is-open");
    capabilityModalPage.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    capabilityModalPage.scrollTop = 0;
  }
}

// Close Capability Detail View
function closeCapabilityDetailFunc() {
  if (capabilityModalPage) {
    capabilityModalPage.classList.remove("is-open");
    capabilityModalPage.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }
}

// Attach Click Listeners to Main Capability Cards and Explore Buttons
const capExploreBtns = document.querySelectorAll("[data-open-cap]");
capExploreBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const key = btn.getAttribute("data-open-cap");
    openCapabilityDetailFunc(key);
  });
});

const capCards = document.querySelectorAll(".cap-card");
capCards.forEach((card) => {
  card.addEventListener("click", () => {
    const key = card.getAttribute("data-cap-target");
    if (key) {
      openCapabilityDetailFunc(key);
    }
  });
});

// Close Button Listeners
if (modalBackBtn) {
  modalBackBtn.addEventListener("click", closeCapabilityDetailFunc);
}
if (modalBottomBackBtn) {
  modalBottomBackBtn.addEventListener("click", closeCapabilityDetailFunc);
}
if (closeCapabilityModal) {
  closeCapabilityModal.addEventListener("click", closeCapabilityDetailFunc);
}

// Close on Escape Key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeCapabilityDetailFunc();
  }
});

/* ==========================================================================
   Section 6: Intelligence-Powered Dashboards Showcase Datasets & Controller
   ========================================================================== */
const showcaseDatasets = {
  executive: {
    title: "Executive Dashboards",
    sub: "Performance overview &bull; Updated today",
    kpis: [
      { label: "REVENUE", val: "$4.82M", growth: "8.4%" },
      { label: "CONVERSION", val: "12.6%", growth: "2.1%" },
      { label: "CUSTOMERS", val: "18,420", growth: "6.8%" },
      { label: "PERFORMANCE", val: "94.2", growth: "3.7%" }
    ],
    lineTitle: "Revenue & forecast",
    lineBadge: "7 months",
    points: [
      { x: 20, y: 96, val: "$3.4M", month: "Feb" },
      { x: 100, y: 90, val: "$3.8M", month: "Mar" },
      { x: 180, y: 76, val: "$4.1M", month: "Apr" },
      { x: 260, y: 58, val: "$4.45M", month: "May" },
      { x: 340, y: 46, val: "$4.82M", month: "Jun" },
      { x: 420, y: 30, val: "$5.35M (Est)", month: "Jul" }
    ],
    barTitle: "Sales by channel",
    bars: [
      { height: "82%", label: "Partner" },
      { height: "66%", label: "Digital" },
      { height: "40%", label: "Other" }
    ]
  },
  sales: {
    title: "Sales Dashboards",
    sub: "Deal velocity, pipeline health & quota attainment",
    kpis: [
      { label: "PIPELINE VALUE", val: "$9.45M", growth: "14.2%" },
      { label: "WIN RATE", val: "36.8%", growth: "4.5%" },
      { label: "DEALS CLOSED", val: "342", growth: "11.2%" },
      { label: "AVG DEAL SIZE", val: "$27.6K", growth: "6.3%" }
    ],
    lineTitle: "Pipeline velocity & forecast",
    lineBadge: "Q2 / Q3",
    points: [
      { x: 20, y: 105, val: "$5.8M", month: "Feb" },
      { x: 100, y: 92, val: "$6.6M", month: "Mar" },
      { x: 180, y: 80, val: "$7.4M", month: "Apr" },
      { x: 260, y: 62, val: "$8.5M", month: "May" },
      { x: 340, y: 48, val: "$9.45M", month: "Jun" },
      { x: 420, y: 28, val: "$11.2M (Est)", month: "Jul" }
    ],
    barTitle: "Revenue by sales tier",
    bars: [
      { height: "90%", label: "Enterprise" },
      { height: "74%", label: "Mid-Market" },
      { height: "52%", label: "SMB" }
    ]
  },
  marketing: {
    title: "Marketing Dashboards",
    sub: "Multi-touch attribution, CAC & lead conversion funnel",
    kpis: [
      { label: "MQLS GENERATED", val: "14,850", growth: "24.6%" },
      { label: "COST PER LEAD", val: "$34.20", growth: "-14.5%" },
      { label: "ROAS / AD ROI", val: "5.4x", growth: "18.2%" },
      { label: "CONVERSION RATE", val: "7.8%", growth: "3.4%" }
    ],
    lineTitle: "Lead traffic & projections",
    lineBadge: "Channels",
    points: [
      { x: 20, y: 110, val: "8.2K", month: "Feb" },
      { x: 100, y: 98, val: "9.9K", month: "Mar" },
      { x: 180, y: 82, val: "11.5K", month: "Apr" },
      { x: 260, y: 64, val: "13.2K", month: "May" },
      { x: 340, y: 44, val: "14.85K", month: "Jun" },
      { x: 420, y: 25, val: "17.4K (Est)", month: "Jul" }
    ],
    barTitle: "Acquisition source",
    bars: [
      { height: "88%", label: "Organic" },
      { height: "70%", label: "Paid Search" },
      { height: "45%", label: "Referral" }
    ]
  },
  finance: {
    title: "Finance Dashboards",
    sub: "Cash flow runway, gross margins & EBITDA tracking",
    kpis: [
      { label: "GROSS MARGIN", val: "78.4%", growth: "3.2%" },
      { label: "OPERATING CASH", val: "$16.8M", growth: "19.5%" },
      { label: "BURN MULTIPLE", val: "0.78x", growth: "-16.4%" },
      { label: "NET MARGIN", val: "24.6%", growth: "5.8%" }
    ],
    lineTitle: "Cash flow trajectory",
    lineBadge: "P&L Model",
    points: [
      { x: 20, y: 100, val: "$11.2M", month: "Feb" },
      { x: 100, y: 88, val: "$12.5M", month: "Mar" },
      { x: 180, y: 74, val: "$14.1M", month: "Apr" },
      { x: 260, y: 55, val: "$15.4M", month: "May" },
      { x: 340, y: 42, val: "$16.8M", month: "Jun" },
      { x: 420, y: 24, val: "$18.9M (Est)", month: "Jul" }
    ],
    barTitle: "OpEx allocation",
    bars: [
      { height: "65%", label: "R&D" },
      { height: "80%", label: "Sales & Mktg" },
      { height: "35%", label: "G&A" }
    ]
  },
  operations: {
    title: "Operations Dashboards",
    sub: "SLA adherence, processing throughput & resource uptime",
    kpis: [
      { label: "SLA COMPLIANCE", val: "99.8%", growth: "1.2%" },
      { label: "CYCLE TIME", val: "1.4 hrs", growth: "-28.4%" },
      { label: "ACTIVE JOBS", val: "84,320", growth: "15.7%" },
      { label: "SYSTEM HEALTH", val: "98.9", growth: "4.6%" }
    ],
    lineTitle: "Throughput & load forecast",
    lineBadge: "Real-time",
    points: [
      { x: 20, y: 92, val: "54K", month: "Feb" },
      { x: 100, y: 84, val: "62K", month: "Mar" },
      { x: 180, y: 70, val: "71K", month: "Apr" },
      { x: 260, y: 56, val: "78K", month: "May" },
      { x: 340, y: 40, val: "84.3K", month: "Jun" },
      { x: 420, y: 22, val: "95.0K (Est)", month: "Jul" }
    ],
    barTitle: "Volume by region",
    bars: [
      { height: "92%", label: "Americas" },
      { height: "76%", label: "EMEA" },
      { height: "58%", label: "APAC" }
    ]
  },
  customer: {
    title: "Customer Dashboards",
    sub: "Cohort retention, customer lifetime value & churn prevention",
    kpis: [
      { label: "ACTIVE USERS", val: "64,280", growth: "16.8%" },
      { label: "NET CHURN RATE", val: "0.9%", growth: "-1.4%" },
      { label: "NET PROMOTER (NPS)", val: "+76", growth: "+8 pts" },
      { label: "AVG LTV", val: "$16.4K", growth: "14.1%" }
    ],
    lineTitle: "User retention & growth",
    lineBadge: "Cohorts",
    points: [
      { x: 20, y: 104, val: "42K", month: "Feb" },
      { x: 100, y: 92, val: "48K", month: "Mar" },
      { x: 180, y: 78, val: "54K", month: "Apr" },
      { x: 260, y: 60, val: "59K", month: "May" },
      { x: 340, y: 44, val: "64.3K", month: "Jun" },
      { x: 420, y: 26, val: "72.5K (Est)", month: "Jul" }
    ],
    barTitle: "Engagement tier",
    bars: [
      { height: "86%", label: "Power Users" },
      { height: "68%", label: "Regular" },
      { height: "38%", label: "Occasional" }
    ]
  },
  supplychain: {
    title: "Supply Chain Dashboards",
    sub: "OTIF delivery, inventory turns & logistics visibility",
    kpis: [
      { label: "ON-TIME IN-FULL", val: "97.4%", growth: "3.8%" },
      { label: "INVENTORY TURNS", val: "9.2x", growth: "1.4x" },
      { label: "STOCKOUT RATE", val: "0.4%", growth: "-2.1%" },
      { label: "SUPPLIER RATING", val: "94.8", growth: "5.2%" }
    ],
    lineTitle: "Fulfillment velocity",
    lineBadge: "Logistics",
    points: [
      { x: 20, y: 98, val: "88%", month: "Feb" },
      { x: 100, y: 88, val: "91%", month: "Mar" },
      { x: 180, y: 74, val: "93.5%", month: "Apr" },
      { x: 260, y: 58, val: "95.8%", month: "May" },
      { x: 340, y: 42, val: "97.4%", month: "Jun" },
      { x: 420, y: 24, val: "99.1% (Est)", month: "Jul" }
    ],
    barTitle: "Throughput by hub",
    bars: [
      { height: "88%", label: "Central Hub" },
      { height: "72%", label: "East DC" },
      { height: "48%", label: "West DC" }
    ]
  }
};

// Render Section 6 Showcase Dashboard
function renderShowcaseDashboard(type) {
  const data = showcaseDatasets[type] || showcaseDatasets.executive;

  // Title & Subtitle
  const titleEl = document.getElementById("showcaseDashTitle");
  const subEl = document.getElementById("showcaseDashSubtitle");
  if (titleEl) titleEl.textContent = data.title;
  if (subEl) subEl.innerHTML = data.sub;

  // KPIs
  data.kpis.forEach((kpi, idx) => {
    const num = idx + 1;
    const lbl = document.getElementById(`scKpiLabel${num}`);
    const val = document.getElementById(`scKpiVal${num}`);
    const grw = document.getElementById(`scKpiGrowthVal${num}`);
    if (lbl) lbl.textContent = kpi.label;
    if (val) {
      val.textContent = kpi.val;
      val.style.transform = "scale(1.08)";
      setTimeout(() => { val.style.transform = "scale(1)"; }, 200);
    }
    if (grw) grw.textContent = kpi.growth;
  });

  // Chart titles
  const lineTitleEl = document.getElementById("scLineChartTitle");
  const lineBadgeEl = document.getElementById("scLineChartBadge");
  const barTitleEl = document.getElementById("scBarChartTitle");
  if (lineTitleEl) lineTitleEl.textContent = data.lineTitle;
  if (lineBadgeEl) lineBadgeEl.textContent = data.lineBadge;
  if (barTitleEl) barTitleEl.textContent = data.barTitle;

  // Line Chart SVGs
  const pts = data.points;
  const solidPathEl = document.getElementById("scChartSolid");
  const forecastPathEl = document.getElementById("scChartForecast");
  const areaPathEl = document.getElementById("scChartArea");
  const ptsGroup = document.getElementById("scPointsGroup");
  const tooltip = document.getElementById("scTooltip");

  // Generate Smooth Solid Curve (first 5 points)
  let solidD = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 0; i < 4; i++) {
    const p0 = pts[i];
    const p1 = pts[i + 1];
    const cx = (p0.x + p1.x) / 2;
    solidD += ` C ${cx} ${p0.y}, ${cx} ${p1.y}, ${p1.x} ${p1.y}`;
  }

  // Generate Smooth Forecast Curve (point 4 to 5)
  const p4 = pts[4];
  const p5 = pts[5];
  const cxForecast = (p4.x + p5.x) / 2;
  const forecastD = `M ${p4.x} ${p4.y} C ${cxForecast} ${p4.y}, ${cxForecast} ${p5.y}, ${p5.x} ${p5.y}`;

  // Generate Area Fill (point 0 to 5, down to y=140)
  let areaD = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i];
    const p1 = pts[i + 1];
    const cx = (p0.x + p1.x) / 2;
    areaD += ` C ${cx} ${p0.y}, ${cx} ${p1.y}, ${p1.x} ${p1.y}`;
  }
  areaD += ` L ${pts[pts.length - 1].x} 140 L ${pts[0].x} 140 Z`;

  if (solidPathEl) solidPathEl.setAttribute("d", solidD);
  if (forecastPathEl) forecastPathEl.setAttribute("d", forecastD);
  if (areaPathEl) areaPathEl.setAttribute("d", areaD);

  // Render SVG Points
  if (ptsGroup) {
    ptsGroup.innerHTML = "";
    pts.forEach((pt, index) => {
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("cx", pt.x);
      circle.setAttribute("cy", pt.y);
      circle.setAttribute("r", index === 4 ? "5" : "4");
      circle.setAttribute("fill", index >= 4 ? "#38bdf8" : "#00c7be");
      circle.setAttribute("stroke", "#091524");
      circle.setAttribute("stroke-width", "2");
      circle.setAttribute("class", "sc-chart-point");

      circle.addEventListener("mouseenter", (e) => {
        if (tooltip) {
          const containerRect = document.querySelector(".showcase-svg-container").getBoundingClientRect();
          const circleRect = circle.getBoundingClientRect();
          tooltip.style.left = `${circleRect.left - containerRect.left + 5}px`;
          tooltip.style.top = `${circleRect.top - containerRect.top}px`;
          tooltip.textContent = `${pt.month}: ${pt.val}`;
          tooltip.style.opacity = "1";
        }
      });

      circle.addEventListener("mouseleave", () => {
        if (tooltip) tooltip.style.opacity = "0";
      });

      ptsGroup.appendChild(circle);
    });
  }

  // Render Bars
  const barsContainer = document.getElementById("scBarsContainer");
  if (barsContainer) {
    barsContainer.innerHTML = "";
    data.bars.forEach((bar) => {
      const col = document.createElement("div");
      col.className = "sc-bar-col";
      col.innerHTML = `
        <div class="sc-bar-track">
          <div class="sc-bar-fill" style="height: 0%" data-h="${bar.height}"></div>
        </div>
        <span class="sc-bar-label">${bar.label}</span>
      `;
      barsContainer.appendChild(col);
    });

    // Animate bar heights
    setTimeout(() => {
      const fills = barsContainer.querySelectorAll(".sc-bar-fill");
      fills.forEach((f) => {
        f.style.height = f.getAttribute("data-h");
      });
    }, 40);
  }

  // Update Pill Active state
  const pillBtns = document.querySelectorAll(".dash-pill-btn");
  pillBtns.forEach((btn) => {
    if (btn.getAttribute("data-type") === type) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

// Attach Event Listeners to Dashboard Pill Switchers
const dashPillBtns = document.querySelectorAll(".dash-pill-btn");
dashPillBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const type = btn.getAttribute("data-type");
    renderShowcaseDashboard(type);
  });
});

// Scroll Reveal Animation EXCLUSIVELY for Section Headings
function initScrollReveal() {
  const headingElements = document.querySelectorAll(
    "h1, h2, .section-title, .section-title-white, .maturity-title, .tech-title, .industries-title, .outcomes-title, .usecases-title, .why-title, .bottom-cta-title"
  );

  if (!("IntersectionObserver" in window)) {
    headingElements.forEach((el) => el.classList.add("is-revealed"));
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -30px 0px",
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
      }
    });
  }, observerOptions);

  headingElements.forEach((el) => {
    if (!el.closest(".header") && !el.closest(".capability-modal-page")) {
      el.classList.add("reveal-heading");
      observer.observe(el);
    }
  });

  // Staggered Step-by-Step Process items (01 to 05)
  const processContainers = document.querySelectorAll(
    ".section-business-needs, .section-analytics-approach"
  );

  const processObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const steps = entry.target.querySelectorAll(".needs-row, .approach-step");
          steps.forEach((step, idx) => {
            step.style.transitionDelay = `${(idx + 1) * 150}ms`;
            step.classList.add("is-visible");
          });
          processObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  processContainers.forEach((container) => processObserver.observe(container));
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  renderDashboard("revenue");
  renderCapabilityDetail("data-analytics");
  renderShowcaseDashboard("executive");
  initScrollReveal();
});




