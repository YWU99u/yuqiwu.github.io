const i18n = {
  zh: {
    nav_about: "关于",
    nav_focus: "方向",
    nav_highlights: "亮点",
    nav_publications: "论文",
    nav_contact: "联系",
    nav_cv: "查看简历",
    hero_eyebrow: "AI Researcher · Founder · Ph.D.",
    hero_title: "以可验证的智能，连接医学与产业",
    hero_subtitle: "11年海外科研与产业经验，专注于多模态情感计算、医疗大模型推理与数字心理健康产品化。",
    hero_cv: "进入CV",
    hero_contact: "联系我",
    hero_location: "Shanghai · China",
    hero_role: "Founder & CEO, KeyLink AI",
    card_name: "吴宇琪",
    card_title: "人工智能博士 · 创业者",
    about_title: "关于我",
    about_desc: "以研究为底座、以产品为目标的AI创业者。",
    about_block_1_title: "研究与产业化",
    about_block_1_body: "研究方向聚焦于可验证推理、临床数据生成与多模态情感理解，已在ACL、NAACL、IEEE JBHI与Nature npj等期刊会议发表。",
    about_block_2_title: "创业与落地",
    about_block_2_body: "创办KeyLink AI，推进AI心理咨询与精神疾病辅助诊断系统进入顶级三甲医院，建立B端+ C端双产品矩阵。",
    focus_title: "研究与产品方向",
    focus_desc: "可解释、可验证、可落地的医疗AI。",
    focus_1_title: "LLM推理可信性",
    focus_1_body: "RASC与Derailer-Rerailer框架，提升医疗场景推理可靠性。",
    focus_2_title: "临床数据生成",
    focus_2_body: "CALLM方法显著降低高质量标注数据成本。",
    focus_3_title: "数字心理健康",
    focus_3_body: "面向B端医院与C端用户的心理陪伴与诊疗支持系统。",
    highlights_title: "关键亮点",
    highlights_desc: "从学术到产业的连续成果。",
    stat_1: "近3年高质量论文",
    stat_2: "总引用次数",
    stat_3: "行业路演与峰会",
    stat_4: "三甲医院合作",
    pub_title: "代表性论文",
    pub_desc: "聚焦可信推理与临床AI。",
    pub_1: "Derailer-Rerailer: Adaptive Verification for Efficient and Reliable Language Model Reasoning. ACL 2025.",
    pub_2: "RASC: Reasoning-Aware Self-Consistency for Efficient LLM Reasoning. NAACL 2025.",
    pub_3: "CALLM: Clinical Interview Analysis through Data Augmentation with LLMs. IEEE JBHI, 2024.",
    pub_4: "Systematic review of ML in PTSD studies for automated diagnosis evaluation. Nature npj Mental Health, 2023.",
    contact_title: "联系",
    contact_desc: "欢迎学术合作与产业交流。",
    contact_block_title: "联系方式",
    contact_phone: "电话",
    contact_block_2_title: "快速入口",
    contact_cv: "查看完整履历与项目细节，请进入CV页面。",
    contact_cv_btn: "打开CV"
  },
  en: {
    nav_about: "About",
    nav_focus: "Focus",
    nav_highlights: "Highlights",
    nav_publications: "Publications",
    nav_contact: "Contact",
    nav_cv: "View CV",
    hero_eyebrow: "AI Researcher · Founder · Ph.D.",
    hero_title: "Building verifiable intelligence for healthcare impact",
    hero_subtitle: "11 years of global research and industry experience in multimodal affective computing, medical LLM reasoning, and digital mental health products.",
    hero_cv: "Open CV",
    hero_contact: "Contact",
    hero_location: "Shanghai · China",
    hero_role: "Founder & CEO, KeyLink AI",
    card_name: "Yuqi Wu",
    card_title: "Ph.D. in AI · Founder",
    about_title: "About",
    about_desc: "Research-grounded, product-driven AI entrepreneurship.",
    about_block_1_title: "Research to Practice",
    about_block_1_body: "Focused on verifiable reasoning, clinical data synthesis, and multimodal affective understanding with publications in ACL, NAACL, IEEE JBHI, and Nature npj.",
    about_block_2_title: "Entrepreneurship",
    about_block_2_body: "Founded KeyLink AI and deployed AI mental health systems into top-tier hospitals, building a dual B2B + B2C product matrix.",
    focus_title: "Research & Product Focus",
    focus_desc: "Explainable, verifiable, and deployable medical AI.",
    focus_1_title: "Trustworthy LLM Reasoning",
    focus_1_body: "RASC and Derailer-Rerailer frameworks to improve clinical reasoning reliability.",
    focus_2_title: "Clinical Data Generation",
    focus_2_body: "CALLM reduces the cost of high-quality labeled clinical data.",
    focus_3_title: "Digital Mental Health",
    focus_3_body: "Psychological support and diagnostic assistance for hospitals and consumers.",
    highlights_title: "Highlights",
    highlights_desc: "Consistent impact from academia to industry.",
    stat_1: "Top papers in 3 years",
    stat_2: "Total citations",
    stat_3: "Industry talks",
    stat_4: "Top hospital collaborations",
    pub_title: "Selected Publications",
    pub_desc: "Focused on trustworthy reasoning and clinical AI.",
    pub_1: "Derailer-Rerailer: Adaptive Verification for Efficient and Reliable Language Model Reasoning. ACL 2025.",
    pub_2: "RASC: Reasoning-Aware Self-Consistency for Efficient LLM Reasoning. NAACL 2025.",
    pub_3: "CALLM: Clinical Interview Analysis through Data Augmentation with LLMs. IEEE JBHI, 2024.",
    pub_4: "Systematic review of ML in PTSD studies for automated diagnosis evaluation. Nature npj Mental Health, 2023.",
    contact_title: "Contact",
    contact_desc: "Open to academic and industry collaborations.",
    contact_block_title: "Contact Info",
    contact_phone: "Phone",
    contact_block_2_title: "Quick Access",
    contact_cv: "For full details and projects, open the CV page.",
    contact_cv_btn: "Open CV"
  }
};

const toggle = document.getElementById("langToggle");
const html = document.documentElement;

function setLanguage(lang) {
  html.setAttribute("lang", lang === "zh" ? "zh-CN" : "en");
  html.setAttribute("data-lang", lang);
  const nodes = document.querySelectorAll("[data-i18n]");
  nodes.forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (i18n[lang] && i18n[lang][key]) {
      node.textContent = i18n[lang][key];
    }
  });
  toggle.textContent = lang === "zh" ? "EN" : "中文";
}

let currentLang = "zh";
setLanguage(currentLang);

toggle.addEventListener("click", () => {
  currentLang = currentLang === "zh" ? "en" : "zh";
  setLanguage(currentLang);
});
