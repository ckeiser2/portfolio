// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/portfolio/";
    },
  },{id: "nav-about",
          title: "About",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/portfolio/about_me/";
          },
        },{id: "nav-godot-game-programming-examples",
          title: "Godot Game Programming Examples",
          description: "A collection of Godot projects from my Masters in Game Dev program.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/portfolio/masters_godot/";
          },
        },{id: "nav-unity-game-programming-examples",
          title: "Unity Game Programming Examples",
          description: "A collection of programming projects from my Masters in Game Dev program.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/portfolio/masters_programming/";
          },
        },{id: "nav-animation-examples",
          title: "Animation Examples",
          description: "A growing collection of animation projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/portfolio/masters_animation/";
          },
        },{id: "dropdown-github-repos",
              title: "Github Repos",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/portfolio/repositories/";
              },
            },{id: "dropdown-experience",
              title: "Experience",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/portfolio/resume/";
              },
            },{id: "dropdown-dev-blogs",
              title: "Dev Blogs",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/portfolio/blog/";
              },
            },{id: "dropdown-site-analytics",
              title: "Site Analytics",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/portfolio/analytics/";
              },
            },{id: "books-the-alchemist",
          title: 'The Alchemist',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/portfolio/books/alchemist/";
            },},{id: "books-babel",
          title: 'Babel',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/portfolio/books/babel/";
            },},{id: "books-dune",
          title: 'Dune',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/portfolio/books/dune/";
            },},{id: "books-the-great-gatsby",
          title: 'The Great Gatsby',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/portfolio/books/gatsby/";
            },},{id: "books-wizzywig-portrait-of-a-serial-hacker",
          title: 'Wizzywig, Portrait of a serial hacker',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/portfolio/books/wizzywig/";
            },},{id: "news-deployed-my-first-ever-online-portfolio-now-replaced-by-this-current-site-old-portfolio-link",
          title: 'Deployed my first ever online portfolio (Now replaced by this current site) Old_Portfolio_Link...',
          description: "",
          section: "News",},{id: "news-graduated-from-the-university-of-illinois-urbana-champaign-with-my-bachelor-of-science-in-information-sciences",
          title: 'Graduated from the University of Illinois Urbana-Champaign with my Bachelor of Science in...',
          description: "",
          section: "News",},{id: "news-started-at-protiviti-global-consulting-firm-as-an-it-audit-consultant-in-stl",
          title: 'Started at Protiviti (Global Consulting Firm) as an IT Audit Consultant in STL...',
          description: "",
          section: "News",},{id: "news-release-of-portfolio-2-0-current-site",
          title: 'Release of portfolio 2.0 (Current Site)',
          description: "",
          section: "News",},{id: "news-started-development-of-my-3d-unity-game-roll-a-ball",
          title: 'Started development of my 3D Unity game Roll-a-Ball',
          description: "",
          section: "News",},{id: "news-release-of-a-playable-demo-of-asteroid-survivors",
          title: 'Release of a playable demo of  Asteroid Survivors',
          description: "",
          section: "News",},{id: "news-promoted-to-senior-consultant-in-it-audit-protiviti",
          title: 'Promoted to Senior Consultant in IT Audit @ Protiviti',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "placeholder animation project",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/masters_animation/project1/";
            },},{id: "projects-asteroid-survivors",
          title: 'Asteroid Survivors',
          description: "2D Unity demo, playable in browser. Play as a spaceship shooting different types of asteroids and extra-terrestial objects in space.",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/games/asteroid-survivors/";
            },},{id: "projects-design-barb-39-s-dungeon-️-️",
          title: '🎮 [Design] Barb&amp;#39;s Dungeon 🖋️ 🕹️',
          description: "Group project apart of GSD 403 @ UIUC. Over the span of a semester design different aspects of a game.",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/games/barb-dun/";
            },},{id: "projects-blender-placeholder",
          title: 'Blender Placeholder',
          description: "Blender Project",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/masters_animation/blender1/";
            },},{id: "projects-first-ruby-jekyll-portfolio-site",
          title: 'First Ruby | Jekyll Portfolio Site',
          description: "Original portfolio site using Ruby&#39;s Jekyll site generator",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/first_port_site/";
            },},{id: "projects-godot-game-2048-knight-️",
          title: '🎮 Godot Game [2048 Knight] 🕹️',
          description: "C# in Godot Engine, Designed the UI and multiple systems.",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/games/group-godot-project/";
            },},{id: "projects-machine-learning-via-tweets",
          title: 'Machine Learning via Tweets 🤖 🧠',
          description: "Training a model and creating a visualization based on Confidence score of the model using tweets from dataset from UIUC Data Science course.",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/machine_learning/";
            },},{id: "projects-unity-project-placeholder",
          title: 'Unity Project Placeholder',
          description: "Placeholder Unity project",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/masters_programming/unity1/";
            },},{id: "projects-network-clustering-analysis",
          title: '📊 Network Clustering Analysis',
          description: "Python project utilizing networkx",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/network_visual_project/";
            },},{id: "projects-python-interactive-data-visualization",
          title: '📊 Python Interactive Data Visualization',
          description: "Using Python and packages like Altair | Data Analytics | Data Visualization",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/python_data_viz/";
            },},{id: "projects-rpgmaker-game-playable-in-browser-️",
          title: '🎮 RPGMaker game [Playable in Browser] 🕹️',
          description: "Short rpg project, utilizing javascript in the &quot;RPGMaker&quot; engine.",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/games/rpg-game/";
            },},{id: "projects-geo-plotting-analysis",
          title: '📊 Geo Plotting / Analysis',
          description: "Using python libraries to use data over geo maps",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/spatial_analysis/";
            },},{id: "projects-tei-solutions",
          title: '📊 TEI Solutions',
          description: "Converting HTML data to TEI | Data Parsing",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/tei_solutions/";
            },},{id: "projects-text-analysis-using-named-entity-recognition",
          title: '📊 Text Analysis using Named Entity Recognition',
          description: "Sorting through text using strategies like Named Entity Recognition and POS Tagging",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/text_analysis_ner/";
            },},{id: "projects-thief-catcher",
          title: 'Thief Catcher',
          description: "Created in Godot utilizing gdscript. Goal of the game is too navigate through levels as a police officer catching thieves and pushing them into the police vehicle. With the interactive UI once all thieves in a level are captured, the player is moved onto the next level. As of right now there are two levels.",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/masters_godot/thiefcatcher/";
            },},{id: "projects-topic-modeling",
          title: '📊 Topic Modeling',
          description: "Topic Modeling with Python",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/topic_modeling/";
            },},{id: "projects-twine-game-quot-a-myconid-39-s-story-quot-playable-in-browser-️-️",
          title: '🎮 Twine Game - &amp;quot;A Myconid&amp;#39;s Story&amp;quot; [Playable in Browser]🖋️ 🕹️',
          description: "Choose your own adventure short story, with 18 possible endings. Playable within Browser.",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/games/myconid/";
            },},{id: "projects-in-progress-roll-a-ball",
          title: 'In Progress! [Roll-a-Ball] 🎮',
          description: "Unity demo excercise where you play as a ball collecting consumables, dodging enemies.",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/games/ball/";
            },},{id: "projects-playable-and-adding-updates-vehiclesim",
          title: 'Playable and adding updates [VehicleSim] 🎮',
          description: "Multiple vehicle based minigames currently in process of testing features and creating levels.",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/games/vehicle-sim/";
            },},{id: "projects-text-analysis-visualization",
          title: '📊 Text Analysis Visualization',
          description: "Python project | Data Scraping | Altair",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/video_essay_visualization/";
            },},{id: "projects-text-analysis-using-named-entity-recognition",
          title: '📊 Text Analysis using Named Entity Recognition',
          description: "Project using webscraped data using pandas and APIs.",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/web_scraping/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
