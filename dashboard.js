async function loadWidgets() {
  const config = await fetch("widgets.json").then(r => r.json());
  const widgetList = config.widgets;
  const dashboard = document.getElementById("dashboard");

  // Start all HTML fetches in parallel
  const htmlPromises = widgetList.map(name =>
    fetch(`widgets/${name}/index.html`).then(r => r.text())
  );

  const htmlResults = await Promise.all(htmlPromises);

  // Append in the original order
  htmlResults.forEach((html, i) => {
    const widgetName = widgetList[i];
    const widgetPath = `widgets/${widgetName}`;

    const wrapper = document.createElement("div");
    wrapper.classList.add("widget");
    wrapper.innerHTML = html;
    dashboard.appendChild(wrapper);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `${widgetPath}/style.css`;
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = `${widgetPath}/main.js`;
    document.body.appendChild(script);
  });
}

loadWidgets();