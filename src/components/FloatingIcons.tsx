import { Building, Type, Sticker, Lightbulb, Car, MapPin, Gift, Palette, Layers, Scissors } from "lucide-react";

const FloatingIcons = () => {
  const icons = [
    { icon: Building, delay: 0, x: 10, y: 20 },
    { icon: Type, delay: 2, x: 85, y: 15 },
    { icon: Sticker, delay: 4, x: 15, y: 60 },
    { icon: Lightbulb, delay: 1, x: 90, y: 45 },
    { icon: Car, delay: 3, x: 20, y: 80 },
    { icon: MapPin, delay: 5, x: 80, y: 75 },
    { icon: Gift, delay: 1.5, x: 5, y: 40 },
    { icon: Palette, delay: 3.5, x: 95, y: 25 },
    { icon: Layers, delay: 2.5, x: 25, y: 10 },
    { icon: Scissors, delay: 4.5, x: 75, y: 85 }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <div
            key={index}
            className="absolute opacity-5 animate-float"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              animationDelay: `${item.delay}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            <IconComponent className="w-8 h-8 text-primary" />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingIcons;