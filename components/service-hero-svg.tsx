interface ServiceHeroSvgProps {
  service: string
  className?: string
}

export default function ServiceHeroSvg({ service, className = "" }: ServiceHeroSvgProps) {
  const renderSvg = () => {
    switch (service.toLowerCase()) {
      case "building":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 400"
            className={`w-full h-full ${className}`}
            preserveAspectRatio="xMidYMid slice"
          >
            <rect width="800" height="400" fill="#1e3a5f" opacity="0.1" />
            <g fill="#1e3a5f" opacity="0.7">
              {/* Buildings */}
              <rect x="100" y="100" width="120" height="250" />
              <rect x="130" y="130" width="20" height="30" fill="white" opacity="0.6" />
              <rect x="170" y="130" width="20" height="30" fill="white" opacity="0.6" />
              <rect x="130" y="180" width="20" height="30" fill="white" opacity="0.6" />
              <rect x="170" y="180" width="20" height="30" fill="white" opacity="0.6" />
              <rect x="130" y="230" width="20" height="30" fill="white" opacity="0.6" />
              <rect x="170" y="230" width="20" height="30" fill="white" opacity="0.6" />
              <rect x="130" y="280" width="20" height="30" fill="white" opacity="0.6" />
              <rect x="170" y="280" width="20" height="30" fill="white" opacity="0.6" />

              <rect x="250" y="150" width="150" height="200" />
              <rect x="280" y="180" width="25" height="40" fill="white" opacity="0.6" />
              <rect x="330" y="180" width="25" height="40" fill="white" opacity="0.6" />
              <rect x="280" y="240" width="25" height="40" fill="white" opacity="0.6" />
              <rect x="330" y="240" width="25" height="40" fill="white" opacity="0.6" />
              <rect x="280" y="300" width="25" height="40" fill="white" opacity="0.6" />
              <rect x="330" y="300" width="25" height="40" fill="white" opacity="0.6" />

              {/* Crane */}
              <rect x="500" y="100" width="10" height="250" />
              <rect x="450" y="100" width="150" height="10" />
              <line x1="450" y1="100" x2="500" y2="150" stroke="#1e3a5f" strokeWidth="8" />
              <circle cx="450" cy="100" r="8" />
              <rect x="440" y="90" width="20" height="5" />
            </g>
          </svg>
        )
      case "plumbing":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 400"
            className={`w-full h-full ${className}`}
            preserveAspectRatio="xMidYMid slice"
          >
            <rect width="800" height="400" fill="#1e3a5f" opacity="0.1" />
            <g fill="none" stroke="#1e3a5f" strokeWidth="8" opacity="0.7">
              {/* Pipes */}
              <path d="M100,200 L300,200 L300,100 L500,100 L500,300 L700,300" />
              <path d="M200,200 L200,300" />
              <path d="M400,100 L400,200" />
              <path d="M600,300 L600,150" />

              {/* Pipe joints */}
              <circle cx="300" cy="200" r="15" fill="#1e3a5f" />
              <circle cx="300" cy="100" r="15" fill="#1e3a5f" />
              <circle cx="500" cy="100" r="15" fill="#1e3a5f" />
              <circle cx="500" cy="300" r="15" fill="#1e3a5f" />
              <circle cx="200" cy="200" r="15" fill="#1e3a5f" />
              <circle cx="400" cy="100" r="15" fill="#1e3a5f" />
              <circle cx="600" cy="300" r="15" fill="#1e3a5f" />

              {/* Water drops */}
              <path d="M200,320 Q205,340 210,320" fill="#1e3a5f" stroke="none" />
              <path d="M400,220 Q405,240 410,220" fill="#1e3a5f" stroke="none" />
              <path d="M600,170 Q605,190 610,170" fill="#1e3a5f" stroke="none" />
            </g>

            {/* Wrench */}
            <g transform="translate(650, 150) rotate(45)">
              <rect x="-15" y="-60" width="30" height="120" rx="10" fill="#1e3a5f" opacity="0.7" />
              <circle cx="0" cy="-40" r="20" stroke="#1e3a5f" strokeWidth="8" fill="none" opacity="0.7" />
            </g>
          </svg>
        )
      case "electricity":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 400"
            className={`w-full h-full ${className}`}
            preserveAspectRatio="xMidYMid slice"
          >
            <rect width="800" height="400" fill="#1e3a5f" opacity="0.1" />
            <g opacity="0.7">
              {/* Power lines */}
              <line x1="100" y1="100" x2="700" y2="100" stroke="#1e3a5f" strokeWidth="4" />
              <line x1="100" y1="120" x2="700" y2="120" stroke="#1e3a5f" strokeWidth="4" />
              <line x1="100" y1="140" x2="700" y2="140" stroke="#1e3a5f" strokeWidth="4" />

              {/* Power poles */}
              <rect x="150" y="140" width="10" height="200" fill="#1e3a5f" />
              <rect x="400" y="140" width="10" height="200" fill="#1e3a5f" />
              <rect x="650" y="140" width="10" height="200" fill="#1e3a5f" />

              {/* Cross beams */}
              <rect x="120" y="160" width="70" height="10" fill="#1e3a5f" />
              <rect x="370" y="160" width="70" height="10" fill="#1e3a5f" />
              <rect x="620" y="160" width="70" height="10" fill="#1e3a5f" />

              {/* Lightning bolt */}
              <path d="M400,200 L430,250 L410,260 L440,320 L380,270 L400,260 L370,200 Z" fill="#1e3a5f" />

              {/* Light bulb */}
              <circle cx="250" cy="250" r="30" fill="#1e3a5f" />
              <path d="M235,280 L265,280 L260,300 L240,300 Z" fill="#1e3a5f" />
              <line x1="240" y1="220" x2="260" y2="240" stroke="white" strokeWidth="3" />
              <line x1="260" y1="220" x2="240" y2="240" stroke="white" strokeWidth="3" />

              {/* Outlet */}
              <rect x="550" y="250" width="40" height="50" rx="5" fill="#1e3a5f" />
              <circle cx="565" cy="270" r="7" fill="white" />
              <circle cx="575" cy="270" r="7" fill="white" />
              <rect x="560" y="285" width="20" height="5" fill="white" />
            </g>
          </svg>
        )
      case "carpentry":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 400"
            className={`w-full h-full ${className}`}
            preserveAspectRatio="xMidYMid slice"
          >
            <rect width="800" height="400" fill="#1e3a5f" opacity="0.1" />
            <g opacity="0.7">
              {/* Wood planks */}
              <rect x="100" y="100" width="600" height="40" fill="#1e3a5f" />
              <rect x="100" y="150" width="600" height="40" fill="#1e3a5f" />
              <rect x="100" y="200" width="600" height="40" fill="#1e3a5f" />
              <rect x="100" y="250" width="600" height="40" fill="#1e3a5f" />

              {/* Wood grain */}
              <path d="M150,100 C170,110 160,130 180,140" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
              <path d="M250,100 C270,110 260,130 280,140" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
              <path d="M350,100 C370,110 360,130 380,140" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
              <path d="M450,100 C470,110 460,130 480,140" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
              <path d="M550,100 C570,110 560,130 580,140" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
              <path d="M650,100 C670,110 660,130 680,140" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />

              <path d="M150,150 C170,160 160,180 180,190" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
              <path d="M250,150 C270,160 260,180 280,190" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
              <path d="M350,150 C370,160 360,180 380,190" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
              <path d="M450,150 C470,160 460,180 480,190" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
              <path d="M550,150 C570,160 560,180 580,190" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
              <path d="M650,150 C670,160 660,180 680,190" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />

              {/* Hammer */}
              <rect x="300" y="300" width="200" height="20" rx="5" fill="#1e3a5f" />
              <rect x="300" y="300" width="20" height="80" rx="5" fill="#1e3a5f" />
              <rect x="480" y="270" width="40" height="80" rx="5" fill="#1e3a5f" />

              {/* Saw */}
              <rect x="100" y="320" width="150" height="30" rx="5" fill="#1e3a5f" />
              <path
                d="M250,320 L250,350 L270,335 L290,350 L310,335 L330,350 L350,335 L370,350 L390,335 L410,350 L430,335 L450,320 Z"
                fill="#1e3a5f"
              />
            </g>
          </svg>
        )
      case "solar system":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 400"
            className={`w-full h-full ${className}`}
            preserveAspectRatio="xMidYMid slice"
          >
            <rect width="800" height="400" fill="#1e3a5f" opacity="0.1" />
            <g opacity="0.7">
              {/* Sun */}
              <circle cx="150" cy="150" r="60" fill="#1e3a5f" />
              <line x1="150" y1="70" x2="150" y2="40" stroke="#1e3a5f" strokeWidth="6" />
              <line x1="150" y1="260" x2="150" y2="230" stroke="#1e3a5f" strokeWidth="6" />
              <line x1="70" y1="150" x2="40" y2="150" stroke="#1e3a5f" strokeWidth="6" />
              <line x1="260" y1="150" x2="230" y2="150" stroke="#1e3a5f" strokeWidth="6" />
              <line x1="95" y1="95" x2="75" y2="75" stroke="#1e3a5f" strokeWidth="6" />
              <line x1="205" y1="205" x2="225" y2="225" stroke="#1e3a5f" strokeWidth="6" />
              <line x1="95" y1="205" x2="75" y2="225" stroke="#1e3a5f" strokeWidth="6" />
              <line x1="205" y1="95" x2="225" y2="75" stroke="#1e3a5f" strokeWidth="6" />

              {/* Solar panels */}
              <rect x="350" y="100" width="350" height="200" fill="#1e3a5f" />
              <line x1="350" y1="150" x2="700" y2="150" stroke="white" strokeWidth="2" />
              <line x1="350" y1="200" x2="700" y2="200" stroke="white" strokeWidth="2" />
              <line x1="350" y1="250" x2="700" y2="250" stroke="white" strokeWidth="2" />
              <line x1="400" y1="100" x2="400" y2="300" stroke="white" strokeWidth="2" />
              <line x1="450" y1="100" x2="450" y2="300" stroke="white" strokeWidth="2" />
              <line x1="500" y1="100" x2="500" y2="300" stroke="white" strokeWidth="2" />
              <line x1="550" y1="100" x2="550" y2="300" stroke="white" strokeWidth="2" />
              <line x1="600" y1="100" x2="600" y2="300" stroke="white" strokeWidth="2" />
              <line x1="650" y1="100" x2="650" y2="300" stroke="white" strokeWidth="2" />

              {/* House */}
              <rect x="450" y="300" width="150" height="80" fill="#1e3a5f" />
              <polygon points="450,300 525,250 600,300" fill="#1e3a5f" />
              <rect x="500" y="330" width="50" height="50" fill="white" opacity="0.5" />

              {/* Energy flow */}
              <path
                d="M300,150 C320,150 330,200 350,200"
                stroke="#1e3a5f"
                strokeWidth="4"
                strokeDasharray="10,5"
                fill="none"
              />
              <path
                d="M525,300 C525,320 450,320 450,350"
                stroke="#1e3a5f"
                strokeWidth="4"
                strokeDasharray="10,5"
                fill="none"
              />
              <path d="M250,150 L300,150" stroke="#1e3a5f" strokeWidth="4" />
            </g>
          </svg>
        )
      case "interior design":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 400"
            className={`w-full h-full ${className}`}
            preserveAspectRatio="xMidYMid slice"
          >
            <rect width="800" height="400" fill="#1e3a5f" opacity="0.1" />
            <g opacity="0.7">
              {/* Room outline */}
              <rect x="100" y="100" width="600" height="250" fill="none" stroke="#1e3a5f" strokeWidth="4" />
              {/* Floor plan grid */}
              <line x1="100" y1="150" x2="700" y2="150" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="100" y1="200" x2="700" y2="200" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="100" y1="250" x2="700" y2="250" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="100" y1="300" x2="700" y2="300" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="150" y1="100" x2="150" y2="350" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="200" y1="100" x2="200" y2="350" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="250" y1="100" x2="250" y2="350" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="300" y1="100" x2="300" y2="350" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="350" y1="100" x2="350" y2="350" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="400" y1="100" x2="400" y2="350" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="450" y1="100" x2="450" y2="350" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="500" y1="100" x2="500" y2="350" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="550" y1="100" x2="550" y2="350" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="600" y1="100" x2="600" y2="350" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="650" y1="100" x2="650" y2="350" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="5,5" />
              {/* Furniture */}
              <rect x="150" y="150" width="150" height="80" fill="#1e3a5f" rx="5" /> {/* Sofa */}
              <rect x="400" y="150" width="80" height="80" fill="#1e3a5f" rx="40" /> {/* Round table */}
              <rect x="550" y="150" width="100" height="50" fill="#1e3a5f" /> {/* TV unit */}
              <rect x="150" y="270" width="100" height="60" fill="#1e3a5f" /> {/* Bed */}
              <rect x="300" y="270" width="60" height="60" fill="#1e3a5f" /> {/* Side table */}
              <rect x="400" y="250" width="150" height="80" fill="#1e3a5f" /> {/* Cabinet */}
              {/* Dimensions */}
              <line x1="100" y1="370" x2="700" y2="370" stroke="#1e3a5f" strokeWidth="2" />
              <line x1="100" y1="365" x2="100" y2="375" stroke="#1e3a5f" strokeWidth="2" />
              <line x1="700" y1="365" x2="700" y2="375" stroke="#1e3a5f" strokeWidth="2" />
              <text x="400" y="390" textAnchor="middle" fill="#1e3a5f" fontSize="16">
                6.0m
              </text>
              <line x1="80" y1="100" x2="80" y2="350" stroke="#1e3a5f" strokeWidth="2" />
              <line x1="75" y1="100" x2="85" y2="100" stroke="#1e3a5f" strokeWidth="2" />
              <line x1="75" y1="350" x2="85" y2="350" stroke="#1e3a5f" strokeWidth="2" />
              <text x="60" y="225" textAnchor="middle" fill="#1e3a5f" fontSize="16" transform="rotate(-90, 60, 225)">
                2.5m
              </text>
            </g>
          </svg>
        )
      case "painting":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 400"
            className={`w-full h-full ${className}`}
            preserveAspectRatio="xMidYMid slice"
          >
            <rect width="800" height="400" fill="#1e3a5f" opacity="0.1" />
            <g opacity="0.7">
              {/* Paint roller */}
              <rect x="350" y="100" width="30" height="200" fill="#1e3a5f" />
              <rect x="320" y="100" width="90" height="40" rx="20" fill="#1e3a5f" />

              {/* Paint tray */}
              <path d="M200,300 L400,300 L380,350 L220,350 Z" fill="#1e3a5f" />
              <path d="M220,350 L380,350 L370,330 L230,330 Z" fill="white" opacity="0.3" />

              {/* Paint drips */}
              <path d="M320,140 Q325,170 330,140" fill="#1e3a5f" />
              <path d="M350,140 Q355,180 360,140" fill="#1e3a5f" />
              <path d="M380,140 Q385,160 390,140" fill="#1e3a5f" />

              {/* Paint brush */}
              <rect x="500" y="150" width="20" height="150" fill="#1e3a5f" />
              <path d="M490,150 L530,150 L520,100 L500,100 Z" fill="#1e3a5f" />
              <path d="M500,100 L520,100 L515,80 L505,80 Z" fill="#1e3a5f" />

              {/* Color palette */}
              <circle cx="650" cy="200" r="80" fill="#1e3a5f" />
              <circle cx="650" cy="150" r="20" fill="white" opacity="0.5" />
              <circle cx="690" cy="180" r="20" fill="white" opacity="0.5" />
              <circle cx="670" cy="230" r="20" fill="white" opacity="0.5" />
              <circle cx="620" cy="240" r="20" fill="white" opacity="0.5" />
              <circle cx="610" cy="180" r="20" fill="white" opacity="0.5" />

              {/* Wall section being painted */}
              <rect x="100" y="100" width="150" height="150" fill="#1e3a5f" />
              <rect x="100" y="100" width="75" height="150" fill="white" opacity="0.3" />
            </g>
          </svg>
        )
      case "epoxy flooring":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 400"
            className={`w-full h-full ${className}`}
            preserveAspectRatio="xMidYMid slice"
          >
            <rect width="800" height="400" fill="#1e3a5f" opacity="0.1" />
            <g opacity="0.7">
              {/* Floor base */}
              <polygon points="100,300 700,300 600,100 200,100" fill="#1e3a5f" />
              {/* Epoxy shine lines */}
              <line x1="200" y1="100" x2="300" y2="300" stroke="white" strokeWidth="1" opacity="0.5" />
              <line x1="300" y1="100" x2="400" y2="300" stroke="white" strokeWidth="1" opacity="0.5" />
              <line x1="400" y1="100" x2="500" y2="300" stroke="white" strokeWidth="1" opacity="0.5" />
              <line x1="500" y1="100" x2="600" y2="300" stroke="white" strokeWidth="1" opacity="0.5" />
              <line x1="200" y1="150" x2="650" y2="150" stroke="white" strokeWidth="1" opacity="0.5" />
              <line x1="150" y1="200" x2="650" y2="200" stroke="white" strokeWidth="1" opacity="0.5" />
              <line x1="100" y1="250" x2="650" y2="250" stroke="white" strokeWidth="1" opacity="0.5" />
              {/* Epoxy application tools */}
              <rect x="150" y="320" width="200" height="20" fill="#1e3a5f" /> {/* Squeegee */}
              <rect x="150" y="320" width="10" height="60" fill="#1e3a5f" /> {/* Handle */}
              <rect x="340" y="320" width="10" height="60" fill="#1e3a5f" /> {/* Handle */}
              {/* Epoxy bucket */}
              <rect x="450" y="320" width="80" height="60" fill="#1e3a5f" />
              <path d="M450,320 C450,300 530,300 530,320" fill="#1e3a5f" />
              <rect x="470" y="310" width="40" height="10" fill="#1e3a5f" />
              {/* Reflection highlights */}
              <ellipse cx="300" cy="200" rx="50" ry="20" fill="white" opacity="0.2" />
              <ellipse cx="500" cy="250" rx="70" ry="25" fill="white" opacity="0.2" />
              <ellipse cx="400" cy="150" rx="60" ry="15" fill="white" opacity="0.2" />
            </g>
          </svg>
        )
      case "civil engineering":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 400"
            className={`w-full h-full ${className}`}
            preserveAspectRatio="xMidYMid slice"
          >
            <rect width="800" height="400" fill="#1e3a5f" opacity="0.1" />
            <g opacity="0.7">
              {/* Road */}
              <path d="M100,200 C250,180 550,220 700,200" stroke="#1e3a5f" strokeWidth="40" fill="none" />
              {/* Road markings */}
              <path d="M150,200 L200,198" stroke="white" strokeWidth="4" strokeDasharray="20,20" />
              <path d="M250,196 L300,194" stroke="white" strokeWidth="4" strokeDasharray="20,20" />
              <path d="M350,196 L400,198" stroke="white" strokeWidth="4" strokeDasharray="20,20" />
              <path d="M450,200 L500,202" stroke="white" strokeWidth="4" strokeDasharray="20,20" />
              <path d="M550,204 L600,202" stroke="white" strokeWidth="4" strokeDasharray="20,20" />
              <path d="M650,200 L700,198" stroke="white" strokeWidth="4" strokeDasharray="20,20" />
              {/* Bridge */}
              <rect x="300" y="150" width="200" height="10" fill="#1e3a5f" />
              <rect x="300" y="150" width="10" height="50" fill="#1e3a5f" />
              <rect x="490" y="150" width="10" height="50" fill="#1e3a5f" />
              <path d="M300,150 C400,120 400,120 500,150" stroke="#1e3a5f" strokeWidth="5" fill="none" />
              {/* Blueprint elements */}
              <line x1="100" y1="300" x2="700" y2="300" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="100" y1="250" x2="700" y2="250" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="100" y1="350" x2="700" y2="350" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="150" y1="100" x2="150" y2="350" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="300" y1="100" x2="300" y2="350" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="450" y1="100" x2="450" y2="350" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="600" y1="100" x2="600" y2="350" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="5,5" />
              {/* Construction equipment */}
              <rect x="150" y="250" width="80" height="50" fill="#1e3a5f" /> {/* Bulldozer body */}
              <rect x="230" y="280" width="30" height="20" fill="#1e3a5f" /> {/* Bulldozer cabin */}
              <rect x="130" y="300" width="120" height="10" fill="#1e3a5f" /> {/* Bulldozer tracks */}
              <rect x="180" y="240" width="20" height="10" fill="#1e3a5f" /> {/* Bulldozer exhaust */}
              <circle cx="600" cy="280" r="30" fill="#1e3a5f" /> {/* Concrete mixer drum */}
              <rect x="570" y="290" width="60" height="20" fill="#1e3a5f" /> {/* Concrete mixer base */}
              <path d="M570,290 L550,310 L630,310 L610,290" fill="#1e3a5f" /> {/* Concrete mixer wheels */}
            </g>
          </svg>
        )
      case "house plans":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 400"
            className={`w-full h-full ${className}`}
            preserveAspectRatio="xMidYMid slice"
          >
            <rect width="800" height="400" fill="#1e3a5f" opacity="0.1" />
            <g opacity="0.7">
              {/* Blueprint grid */}
              <g stroke="#1e3a5f" strokeWidth="1" strokeDasharray="5,5">
                <line x1="100" y1="100" x2="700" y2="100" />
                <line x1="100" y1="150" x2="700" y2="150" />
                <line x1="100" y1="200" x2="700" y2="200" />
                <line x1="100" y1="250" x2="700" y2="250" />
                <line x1="100" y1="300" x2="700" y2="300" />

                <line x1="100" y1="100" x2="100" y2="300" />
                <line x1="150" y1="100" x2="150" y2="300" />
                <line x1="200" y1="100" x2="200" y2="300" />
                <line x1="250" y1="100" x2="250" y2="300" />
                <line x1="300" y1="100" x2="300" y2="300" />
                <line x1="350" y1="100" x2="350" y2="300" />
                <line x1="400" y1="100" x2="400" y2="300" />
                <line x1="450" y1="100" x2="450" y2="300" />
                <line x1="500" y1="100" x2="500" y2="300" />
                <line x1="550" y1="100" x2="550" y2="300" />
                <line x1="600" y1="100" x2="600" y2="300" />
                <line x1="650" y1="100" x2="650" y2="300" />
                <line x1="700" y1="100" x2="700" y2="300" />
              </g>
              {/* House outline */}
              <rect x="150" y="150" width="500" height="150" stroke="#1e3a5f" strokeWidth="4" fill="none" />
              {/* Interior walls */}
              <line x1="350" y1="150" x2="350" y2="300" stroke="#1e3a5f" strokeWidth="4" />
              <line x1="500" y1="150" x2="500" y2="300" stroke="#1e3a5f" strokeWidth="4" />
              <line x1="350" y1="225" x2="500" y2="225" stroke="#1e3a5f" strokeWidth="4" />
              <line x1="150" y1="225" x2="350" y2="225" stroke="#1e3a5f" strokeWidth="4" />
              {/* Doors */}
              <path d="M350,200 A30,30 0 0,1 380,170" stroke="#1e3a5f" strokeWidth="2" fill="none" />
              <path d="M450,225 A30,30 0 0,0 480,195" stroke="#1e3a5f" strokeWidth="2" fill="none" />
              <path d="M250,225 A30,30 0 0,1 280,195" stroke="#1e3a5f" strokeWidth="2" fill="none" />
              {/* Windows */}
              <rect x="200" y="150" width="50" height="10" fill="#1e3a5f" />
              <rect x="400" y="150" width="50" height="10" fill="#1e3a5f" />
              <rect x="550" y="150" width="50" height="10" fill="#1e3a5f" />
              <rect x="150" y="180" width="10" height="30" fill="#1e3a5f" />
              <rect x="640" y="180" width="10" height="30" fill="#1e3a5f" />
              <rect x="550" y="250" width="50" height="10" fill="#1e3a5f" />
              {/* Furniture symbols */}
              <rect x="180" y="260" width="40" height="20" fill="#1e3a5f" /> {/* Bed */}
              <circle cx="400" cy="180" r="15" fill="#1e3a5f" /> {/* Table */}
              <rect x="550" y="180" width="30" height="20" fill="#1e3a5f" /> {/* Sofa */}
              {/* Compass */}
              <circle cx="600" cy="350" r="20" stroke="#1e3a5f" strokeWidth="2" fill="none" />
              <line x1="600" y1="330" x2="600" y2="350" stroke="#1e3a5f" strokeWidth="2" />
              <line x1="600" y1="350" x2="615" y2="360" stroke="#1e3a5f" strokeWidth="2" />
              <text x="600" y="325" textAnchor="middle" fill="#1e3a5f" fontSize="12">
                N
              </text>
            </g>
          </svg>
        )
      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 400"
            className={`w-full h-full ${className}`}
            preserveAspectRatio="xMidYMid slice"
          >
            <rect width="800" height="400" fill="#1e3a5f" opacity="0.1" />
            <g fill="#1e3a5f" opacity="0.7">
              {/* Generic construction elements */}
              <rect x="100" y="200" width="600" height="150" />
              <polygon points="100,200 400,100 700,200" />
              <rect x="300" y="250" width="80" height="100" fill="white" opacity="0.6" />
              <rect x="500" y="250" width="80" height="100" fill="white" opacity="0.6" />
            </g>
          </svg>
        )
    }
  }

  return renderSvg()
}
