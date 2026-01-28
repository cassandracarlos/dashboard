# Z_Dashboard
`Personal organizer for my daily operations.`

## structure
```
z_dashboard/
├── dashboard.css
├── dashboard.js
├── index.html
└── widgets/
    ├── widgetName/
    │   ├── widgetName.html
    │   ├── widgetName.js
    │   └── widgetName.css
    ├── widgetName/
    │   ├── widgetName.html
    │   ├── widgetName.js
    │   └── widgetName.css
    └── ... (additional widgets)
```

## prompts
`Copy and paste the following into any new chat to instantly bring the assistant up to speed.`
```
Please help me continue building or debugging widgets using this architecture.
```

## file breakdown
### index.html
`minimal shell`
```markdown
- Minimal shell with empty widget containers
- Widget JavaScript loaded before dashboard.js
```
### dashboard.js
`dynamic loader`
```markdown
- It loads: widget HTML, CSS, and widget init() function
- This is what lets you add new widgets with one line
```

## widgets
### already added
- [<code>dayGrid</code>](#daygrid)
- [<code>takeMeds</code>](#takemeds)
- [<code>toDoList</code>](#todolist)
- [<code>timeBlocks</code>](#timeblocks)
- [<code>periodTracker</code>](#periodtracker)
<!---->
#### `dayGrid`
#### `takeMeds`
#### `toDoList`
#### `timeBlocks`
#### `periodTracker`
<!---->
### ideas (not yet added)
- [<code>currentWork</code>](#currentwork)
- [<code>actionValues</code>](#actionvalues)
- [<code>writeCopy</code>](#writecopy)
- [<code>assetLibrary</code>](#assetlibrary)
<!---->
#### `currentWork`
#### `actionValues`
#### `writeCopy` <!-- content bank -->
#### `actionValues` <!-- design library -->

## processes
### project briefs
```
As if it came from a real client. Each brief should include:
* Client type (e.g. yoga studio, indie game dev, local café, non-profit, SaaS tool)
* Goal (sell tickets, book consultations, grow email list, explain a product)
* Audience (who they are, what they care about, what they struggle with)
* Constraints (small budget, DIY content, mobile-first, accessibility needs)
* Success metric (signups, bookings, clicks, clarity)
```
### content first
```
For each project, write:
* Core message (1–2 sentences) / Page structure (hero → problem → solution → proof → CTA)
* Actual copy (not lorem ipsum) / Realistic microcopy (buttons, form labels, error states)
```
### hierarchy and scannability
```
Now design layouts that: * Emphasize hierarchy and scannability * Make CTAs obvious
* Adapt cleanly to mobile * Respect accessibility (contrast, font size, focus states)
```