"use client";

import { useState, useEffect } from "react";

interface Activity {
  id: string;
  type: "verification" | "match" | "skill";
  message: string;
  timestamp: string;
  user: string;
}

const mockActivities: Activity[] = [
  {
    id: "1",
    type: "verification",
    message: "AWS certification verified",
    timestamp: "2 min ago",
    user: "John Doe",
  },
  {
    id: "2",
    type: "match",
    message: "matched with Tesla (98% fit)",
    timestamp: "5 min ago",
    user: "Sarah Chen",
  },
  {
    id: "3",
    type: "skill",
    message: "unlocked Terraform Infrastructure",
    timestamp: "8 min ago",
    user: "Mike Johnson",
  },
  {
    id: "4",
    type: "verification",
    message: "Snowflake query logs verified",
    timestamp: "12 min ago",
    user: "Emily Davis",
  },
  {
    id: "5",
    type: "match",
    message: "matched with SpaceX (92% fit)",
    timestamp: "15 min ago",
    user: "Alex Wong",
  },
];

export default function ActivityFeed() {
  const [activities, setActivities] = useState<Activity[]>(mockActivities);
  const [newActivity, setNewActivity] = useState<Activity | null>(null);

  useEffect(() => {
    // Simulate new activities every 8 seconds
    const interval = setInterval(() => {
      const randomActivities = [
        {
          type: "verification" as const,
          message: "Python skills verified",
          user: "David Lee",
        },
        {
          type: "match" as const,
          message: "matched with Google (95% fit)",
          user: "Lisa Park",
        },
        {
          type: "skill" as const,
          message: "unlocked Kubernetes",
          user: "Tom Wilson",
        },
      ];

      const random = randomActivities[Math.floor(Math.random() * randomActivities.length)];
      const activity: Activity = {
        id: Date.now().toString(),
        type: random.type,
        message: random.message,
        timestamp: "Just now",
        user: random.user,
      };

      setNewActivity(activity);
      setTimeout(() => {
        setActivities((prev) => [activity, ...prev.slice(0, 4)]);
        setNewActivity(null);
      }, 500);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const getIcon = (type: string) => {
    switch (type) {
      case "verification":
        return "✓";
      case "match":
        return "🎯";
      case "skill":
        return "⚡";
      default:
        return "•";
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-white">Live Activity</h3>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-400">Real-time</span>
        </div>
      </div>

      <div className="space-y-3">
        {newActivity && (
          <div className="bg-[#00A8B5]/30 rounded-lg p-3 border border-[#00A8B5] animate-pulse">
            <div className="flex items-start gap-3">
              <span className="text-xl">{getIcon(newActivity.type)}</span>
              <div className="flex-1">
                <p className="text-white text-sm">
                  <span className="font-semibold">{newActivity.user}</span> {newActivity.message}
                </p>
                <p className="text-xs text-gray-400 mt-1">{newActivity.timestamp}</p>
              </div>
            </div>
          </div>
        )}

        {activities.map((activity) => (
          <div
            key={activity.id}
            className="bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-all"
          >
            <div className="flex items-start gap-3">
              <span className="text-xl">{getIcon(activity.type)}</span>
              <div className="flex-1">
                <p className="text-white text-sm">
                  <span className="font-semibold">{activity.user}</span> {activity.message}
                </p>
                <p className="text-xs text-gray-400 mt-1">{activity.timestamp}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}