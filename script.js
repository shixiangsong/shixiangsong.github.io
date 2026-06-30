const siteContent = {
  en: {
    title: "Shixiang Song",
    nav: {
      news: "News",
      publications: "Publications",
      experience: "Experience",
      visitors: "Visitors",
      contact: "Contact"
    },
    hero: {
      eyebrow: "PhD Student",
      name: "Shixiang Song",
      role: "Shanghai Jiao Tong University / Shanghai Innovation Institute",
      intro: "PhD student at Shanghai Jiao Tong University and Shanghai Innovation Institute.",
      cv: "Download CV",
      email: "Email"
    },
    sections: {
      news: ["News", "Recent updates"],
      publications: ["Publications", "Selected papers"],
      experience: ["Experience", "Research appointments"],
      education: ["Education", "Academic background"],
      skills: ["Skills", "Tooling"],
      visitors: ["Visitors", "Global access statistics"],
      contact: ["Contact", "Get in touch"]
    },
    news: [
      {
        date: "2026.06",
        text: "PonderLM-2 was selected as an ICML 2026 Spotlight."
      },
      {
        date: "2026.03",
        text: "AdaPonderLM was released as an arXiv preprint."
      },
      {
        date: "2025.06",
        text: "Recognized as an Outstanding Graduate of Shanghai Jiao Tong University."
      }
    ],
    publications: [
      {
        title: "AdaPonderLM: Gated Pondering Language Models with Token-Wise Adaptive Depth",
        authors: "Shixiang Song, He Li, et al.",
        venue: "arXiv preprint, 2026",
        image: "assets/adaponderlm-figure.png",
        summary: "A gated recurrent language model that allocates computation token by token and reuses cached states for efficient adaptive inference.",
        links: [
          { label: "arXiv", url: "https://arxiv.org/abs/2603.01914" },
          { label: "PDF", url: "https://arxiv.org/pdf/2603.01914" }
        ]
      },
      {
        title: "Pretraining Language Models to Ponder in Continuous Space",
        authors: "Boyi Zeng, Shixiang Song, et al.",
        venue: "ICLR 2026 Poster",
        image: "assets/ponderlm-figure.png",
        summary: "Introduces self-supervised pondering embeddings so a language model can refine predictions through continuous-space computation.",
        links: [
          { label: "arXiv", url: "https://arxiv.org/abs/2505.20674" },
          { label: "PDF", url: "https://arxiv.org/pdf/2505.20674" },
          { label: "Code", url: "https://github.com/LUMIA-Group/PonderingLM" }
        ]
      },
      {
        title: "PonderLM-2: Pretraining LLM with Latent Thoughts in Continuous Space",
        authors: "Boyi Zeng, He Li, Shixiang Song, et al.",
        venue: "ICML 2026 Spotlight",
        image: "assets/ponderlm2-figure.png",
        summary: "Adds per-token latent thoughts before prediction, turning generation steps into a scalable continuous-space pretraining signal.",
        links: [
          { label: "arXiv", url: "https://arxiv.org/abs/2509.23184" },
          { label: "PDF", url: "https://arxiv.org/pdf/2509.23184" },
          { label: "Code", url: "https://github.com/LUMIA-Group/PonderLM-2" }
        ]
      },
      {
        title: "Innovator: Scientific Continued Pretraining with Fine-grained MoE Upcycling",
        authors: "Ning Liao, Xiaoxing Wang, ..., Shixiang Song, et al.",
        venue: "arXiv preprint, 2025",
        image: "assets/innovator-figure.png",
        summary: "Explores fine-grained expert upcycling for scientific continued pretraining while preserving broad language ability.",
        links: [
          { label: "arXiv", url: "https://arxiv.org/abs/2507.18671" },
          { label: "PDF", url: "https://arxiv.org/pdf/2507.18671" }
        ]
      }
    ],
    experience: [
      {
        title: "PonderLM Ecosystem",
        date: "2025.01 - Present",
        text: "Built and extended adaptive-depth and continuous latent reasoning methods for vertical scaling of LLMs."
      },
      {
        title: "Research Intern, Shanghai AI Laboratory / IAAR",
        date: "2024.09 - 2025.08",
        text: "Worked on dataset cleaning, training curves, and post-training alignment for fine-grained MoE transfer."
      }
    ],
    education: [
      {
        title: "PhD Student, Artificial Intelligence",
        place: "Shanghai Jiao Tong University / Shanghai Innovation Institute",
        date: "2025.09 - Present"
      },
      {
        title: "B.Eng., Computer Science and Technology (IEEE Pilot Class)",
        place: "Shanghai Jiao Tong University",
        date: "2021.09 - 2025.06"
      },
      {
        title: "Outstanding Graduate",
        place: "Shanghai Jiao Tong University",
        date: "2025"
      }
    ],
    skills: ["PyTorch", "DeepSpeed", "Transformers", "Flash-Attention", "vLLM", "Linux", "Git", "LaTeX", "Python", "C/C++"],
    contact: {
      text: "Open to research conversations around efficient LLM architectures, adaptive inference, and post-training.",
      email: "songshixiang@sjtu.edu.cn",
      scholar: "Google Scholar",
      github: "GitHub",
      x: "X",
      rednote: "RedNote"
    },
    visitors: {
      text: "Global visitor distribution and page views are tracked with Flag Counter."
    },
    footer: "© 2026 Shixiang Song. Built for GitHub Pages."
  },
  zh: {
    title: "宋士祥",
    nav: {
      news: "动态",
      publications: "论文",
      experience: "经历",
      visitors: "访问统计",
      contact: "联系"
    },
    hero: {
      eyebrow: "博士研究生",
      name: "宋士祥",
      role: "上海交通大学 / 上海创智学院",
      intro: "上海交通大学 / 上海创智学院博士研究生。",
      cv: "下载简历",
      email: "邮件联系"
    },
    sections: {
      news: ["动态", "近期更新"],
      publications: ["论文", "代表论文"],
      experience: ["经历", "科研经历"],
      education: ["教育背景", "学习经历"],
      skills: ["技能", "工具链"],
      visitors: ["访问统计", "全球访问情况"],
      contact: ["联系", "欢迎交流"]
    },
    news: [
      {
        date: "2026.06",
        text: "PonderLM-2 入选 ICML 2026 Spotlight。"
      },
      {
        date: "2026.03",
        text: "AdaPonderLM 作为 arXiv 预印本发布。"
      },
      {
        date: "2025.06",
        text: "获评上海交通大学优秀毕业生。"
      }
    ],
    publications: [
      {
        title: "AdaPonderLM: Gated Pondering Language Models with Token-Wise Adaptive Depth",
        authors: "Shixiang Song, He Li, et al.",
        venue: "arXiv preprint, 2026",
        image: "assets/adaponderlm-figure.png",
        summary: "通过门控循环语言模型按 token 分配计算量，并复用缓存状态，实现更高效的自适应推理。",
        links: [
          { label: "arXiv", url: "https://arxiv.org/abs/2603.01914" },
          { label: "PDF", url: "https://arxiv.org/pdf/2603.01914" }
        ]
      },
      {
        title: "Pretraining Language Models to Ponder in Continuous Space",
        authors: "Boyi Zeng, Shixiang Song, et al.",
        venue: "ICLR 2026 Poster",
        image: "assets/ponderlm-figure.png",
        summary: "提出自监督的 pondering embedding，使语言模型能在连续空间中多步细化预测。",
        links: [
          { label: "arXiv", url: "https://arxiv.org/abs/2505.20674" },
          { label: "PDF", url: "https://arxiv.org/pdf/2505.20674" },
          { label: "Code", url: "https://github.com/LUMIA-Group/PonderingLM" }
        ]
      },
      {
        title: "PonderLM-2: Pretraining LLM with Latent Thoughts in Continuous Space",
        authors: "Boyi Zeng, He Li, Shixiang Song, et al.",
        venue: "ICML 2026 Spotlight",
        image: "assets/ponderlm2-figure.png",
        summary: "在每个 token 预测前引入 latent thought，把生成步扩展为可预训练的连续空间计算。",
        links: [
          { label: "arXiv", url: "https://arxiv.org/abs/2509.23184" },
          { label: "PDF", url: "https://arxiv.org/pdf/2509.23184" },
          { label: "Code", url: "https://github.com/LUMIA-Group/PonderLM-2" }
        ]
      },
      {
        title: "Innovator: Scientific Continued Pretraining with Fine-grained MoE Upcycling",
        authors: "Ning Liao, Xiaoxing Wang, ..., Shixiang Song, et al.",
        venue: "arXiv preprint, 2025",
        image: "assets/innovator-figure.png",
        summary: "面向科学领域持续预训练，研究细粒度专家 upcycling，同时尽量保留通用语言能力。",
        links: [
          { label: "arXiv", url: "https://arxiv.org/abs/2507.18671" },
          { label: "PDF", url: "https://arxiv.org/pdf/2507.18671" }
        ]
      }
    ],
    experience: [
      {
        title: "PonderLM 生态系统",
        date: "2025.01 - 至今",
        text: "构建并拓展自适应深度与连续潜空间推理方法，用于大语言模型纵向扩展。"
      },
      {
        title: "上海算法创新研究院 / IAAR 科研实习生",
        date: "2024.09 - 2025.08",
        text: "参与大规模科学领域数据清洗、训练曲线跟踪和细粒度 MoE 迁移的训练后阶段工作。"
      }
    ],
    education: [
      {
        title: "人工智能博士研究生",
        place: "上海交通大学 / 上海创智学院",
        date: "2025.09 - 至今"
      },
      {
        title: "计算机科学与技术（IEEE试点班）本科",
        place: "上海交通大学",
        date: "2021.09 - 2025.06"
      },
      {
        title: "优秀毕业生",
        place: "上海交通大学",
        date: "2025"
      }
    ],
    skills: ["PyTorch", "DeepSpeed", "Transformers", "Flash-Attention", "vLLM", "Linux", "Git", "LaTeX", "Python", "C/C++"],
    contact: {
      text: "欢迎围绕高效大模型架构、自适应推理与训练后优化进行交流。",
      email: "songshixiang@sjtu.edu.cn",
      scholar: "Google Scholar",
      github: "GitHub",
      x: "X",
      rednote: "小红书"
    },
    visitors: {
      text: "全球访问分布与页面浏览量由 Flag Counter 统计。"
    },
    footer: "© 2026 宋士祥。为 GitHub Pages 构建。"
  },
  ja: {
    title: "宋士祥",
    nav: {
      news: "ニュース",
      publications: "論文",
      experience: "経歴",
      visitors: "訪問統計",
      contact: "連絡先"
    },
    hero: {
      eyebrow: "博士課程学生",
      name: "宋士祥",
      role: "上海交通大学 / 上海創智学院",
      intro: "上海交通大学 / 上海創智学院の博士課程学生です。",
      cv: "CV をダウンロード",
      email: "メール"
    },
    sections: {
      news: ["ニュース", "最近の更新"],
      publications: ["論文", "主な論文"],
      experience: ["経歴", "研究歴"],
      education: ["学歴", "教育背景"],
      skills: ["スキル", "ツール"],
      visitors: ["訪問統計", "グローバルアクセス"],
      contact: ["連絡先", "お問い合わせ"]
    },
    news: [
      {
        date: "2026.06",
        text: "PonderLM-2 が ICML 2026 Spotlight に選ばれました。"
      },
      {
        date: "2026.03",
        text: "AdaPonderLM を arXiv preprint として公開しました。"
      },
      {
        date: "2025.06",
        text: "上海交通大学の優秀卒業生に選ばれました。"
      }
    ],
    publications: [
      {
        title: "AdaPonderLM: Gated Pondering Language Models with Token-Wise Adaptive Depth",
        authors: "Shixiang Song, He Li, et al.",
        venue: "arXiv preprint, 2026",
        image: "assets/adaponderlm-figure.png",
        summary: "ゲート付き再帰型言語モデルにより、token ごとに計算量を割り当て、キャッシュ再利用で効率的な適応推論を行います。",
        links: [
          { label: "arXiv", url: "https://arxiv.org/abs/2603.01914" },
          { label: "PDF", url: "https://arxiv.org/pdf/2603.01914" }
        ]
      },
      {
        title: "Pretraining Language Models to Ponder in Continuous Space",
        authors: "Boyi Zeng, Shixiang Song, et al.",
        venue: "ICLR 2026 Poster",
        image: "assets/ponderlm-figure.png",
        summary: "自己教師ありの pondering embedding により、言語モデルが連続空間で予測を段階的に改善できるようにします。",
        links: [
          { label: "arXiv", url: "https://arxiv.org/abs/2505.20674" },
          { label: "PDF", url: "https://arxiv.org/pdf/2505.20674" },
          { label: "Code", url: "https://github.com/LUMIA-Group/PonderingLM" }
        ]
      },
      {
        title: "PonderLM-2: Pretraining LLM with Latent Thoughts in Continuous Space",
        authors: "Boyi Zeng, He Li, Shixiang Song, et al.",
        venue: "ICML 2026 Spotlight",
        image: "assets/ponderlm2-figure.png",
        summary: "各 token の予測前に latent thought を追加し、生成ステップを連続空間で学習可能な計算に変換します。",
        links: [
          { label: "arXiv", url: "https://arxiv.org/abs/2509.23184" },
          { label: "PDF", url: "https://arxiv.org/pdf/2509.23184" },
          { label: "Code", url: "https://github.com/LUMIA-Group/PonderLM-2" }
        ]
      },
      {
        title: "Innovator: Scientific Continued Pretraining with Fine-grained MoE Upcycling",
        authors: "Ning Liao, Xiaoxing Wang, ..., Shixiang Song, et al.",
        venue: "arXiv preprint, 2025",
        image: "assets/innovator-figure.png",
        summary: "科学分野の継続事前学習に向けて、細粒度の expert upcycling と汎用能力の保持を扱います。",
        links: [
          { label: "arXiv", url: "https://arxiv.org/abs/2507.18671" },
          { label: "PDF", url: "https://arxiv.org/pdf/2507.18671" }
        ]
      }
    ],
    experience: [
      {
        title: "PonderLM エコシステム",
        date: "2025.01 - 現在",
        text: "LLM の垂直方向の拡張に向けて、適応的深さと連続潜在空間推論の手法を構築しました。"
      },
      {
        title: "研究インターン, 上海 AI Laboratory / IAAR",
        date: "2024.09 - 2025.08",
        text: "科学分野データのクリーニング、学習曲線の分析、細粒度 MoE 移行のポストトレーニングに従事しました。"
      }
    ],
    education: [
      {
        title: "博士課程, 人工知能",
        place: "上海交通大学 / 上海創智学院",
        date: "2025.09 - 現在"
      },
      {
        title: "学士, コンピュータ科学と技術（IEEEパイロットクラス）",
        place: "上海交通大学",
        date: "2021.09 - 2025.06"
      },
      {
        title: "優秀卒業生",
        place: "上海交通大学",
        date: "2025"
      }
    ],
    skills: ["PyTorch", "DeepSpeed", "Transformers", "Flash-Attention", "vLLM", "Linux", "Git", "LaTeX", "Python", "C/C++"],
    contact: {
      text: "効率的な LLM アーキテクチャ、適応的推論、ポストトレーニングに関する研究交流を歓迎します。",
      email: "songshixiang@sjtu.edu.cn",
      scholar: "Google Scholar",
      github: "GitHub",
      x: "X",
      rednote: "RED"
    },
    visitors: {
      text: "グローバルな訪問分布とページビューは Flag Counter で集計しています。"
    },
    footer: "© 2026 宋士祥。GitHub Pages 用に構築。"
  }
};

const defaultLanguage = "en";
const buttons = document.querySelectorAll("[data-lang]");

function getInitialLanguage() {
  const requested = new URLSearchParams(window.location.search).get("lang");
  if (requested && siteContent[requested]) return requested;

  const saved = localStorage.getItem("site-language");
  if (saved && siteContent[saved]) return saved;

  const browserLanguage = navigator.language.toLowerCase();
  if (browserLanguage.startsWith("zh")) return "zh";
  if (browserLanguage.startsWith("ja")) return "ja";
  return defaultLanguage;
}

function renderList(items, renderer) {
  return items.map(renderer).join("");
}

function setLanguage(language, updateUrl = true) {
  const content = siteContent[language] || siteContent[defaultLanguage];

  document.documentElement.lang = language === "zh" ? "zh-CN" : language;
  document.title = content.title;
  document.querySelector(".brand").textContent = content.title;

  Object.entries(content.nav).forEach(([key, value]) => {
    document.querySelector(`[data-nav="${key}"]`).textContent = value;
  });

  document.getElementById("hero-eyebrow").textContent = content.hero.eyebrow;
  document.getElementById("hero-name").textContent = content.hero.name;
  document.getElementById("hero-role").textContent = content.hero.role;
  document.getElementById("hero-intro").textContent = content.hero.intro;
  document.getElementById("hero-actions").innerHTML = `
    <a class="button" href="assets/cv.pdf">${content.hero.cv}</a>
    <a class="button secondary" href="mailto:${content.contact.email}">${content.hero.email}</a>
  `;

  Object.entries(content.sections).forEach(([key, value]) => {
    document.querySelector(`[data-section-label="${key}"]`).textContent = value[0];
    const sectionTitle = document.querySelector(`[data-section-title="${key}"]`);
    sectionTitle.textContent = value[1];
    sectionTitle.hidden = !value[1];
  });

  document.getElementById("news-list").innerHTML = renderList(content.news, (item) => `
    <article class="news-item">
      <span>${item.date}</span>
      <p>${item.text}</p>
    </article>
  `);

  document.getElementById("publication-list").innerHTML = renderList(content.publications, (item) => `
    <article class="publication-card">
      <figure class="publication-figure">
        <img src="${item.image}" alt="${item.title}">
      </figure>
      <div class="publication-body">
        <div class="publication-head">
          <div>
            <h3>${item.title}</h3>
            <p>${item.authors}</p>
          </div>
          <span class="publication-meta">${item.venue}</span>
        </div>
        <p>${item.summary}</p>
        <div class="publication-links">
          ${item.links.map((link) => `<a href="${link.url}">${link.label}</a>`).join("")}
        </div>
      </div>
    </article>
  `);

  document.getElementById("timeline").innerHTML = renderList(content.experience, (item) => `
    <article class="timeline-item">
      <div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
      <span class="timeline-date">${item.date}</span>
    </article>
  `);

  document.getElementById("education-list").innerHTML = renderList(content.education, (item) => `
    <article class="stack-item">
      <h3>${item.title}</h3>
      <p>${item.place}</p>
      <p class="stack-date">${item.date}</p>
    </article>
  `);

  document.getElementById("skill-list").innerHTML = content.skills
    .map((skill) => `<span>${skill}</span>`)
    .join("");

  document.getElementById("visitor-copy").innerHTML = `<p>${content.visitors.text}</p>`;

  document.getElementById("contact-panel").innerHTML = `
    <p>${content.contact.text}</p>
    <div class="contact-links">
      <a class="button" href="mailto:${content.contact.email}">${content.contact.email}</a>
      <a class="button secondary" href="https://scholar.google.com/citations?user=HSIJT2gAAAAJ&hl=en">${content.contact.scholar}</a>
      <a class="button secondary" href="https://github.com/shixiangsong">${content.contact.github}</a>
      <a class="button secondary" href="https://x.com/ShixiangSONG">${content.contact.x}</a>
      <a class="button secondary" href="https://www.xiaohongshu.com/user/profile/650172ae000000000603276e">${content.contact.rednote}</a>
    </div>
  `;

  document.getElementById("footer-text").textContent = content.footer;

  buttons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === language));
  });

  localStorage.setItem("site-language", language);

  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", language);
    window.history.replaceState({}, "", url);
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

setLanguage(getInitialLanguage(), false);
