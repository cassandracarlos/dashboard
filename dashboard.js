async function loadWidgets() {
  const config = await fetch("widgets.json").then(r => r.json());
  const widgetList = config.widgets;

  const dashboard = document.getElementById("dashboard");

  widgetList.forEach(async (widgetName) => {
    const widgetPath = `widgets/${widgetName}`;

    // Load HTML
    const html = await fetch(`${widgetPath}/index.html`).then(r => r.text());
    const wrapper = document.createElement("div");
    wrapper.classList.add("widget");
    wrapper.innerHTML = html;
    dashboard.appendChild(wrapper);

    // Load CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `${widgetPath}/style.css`;
    document.head.appendChild(link);

    // Load JS
    const script = document.createElement("script");
    script.src = `${widgetPath}/main.js`;
    document.body.appendChild(script);
  });
}

loadWidgets();
