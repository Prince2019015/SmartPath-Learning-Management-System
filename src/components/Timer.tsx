import React, { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

interface TimerProps {
  timeRemaining: number; // in seconds
  onTimeUp: () => void;
}

const Timer: React.FC<TimerProps> = ({ timeRemaining, onTimeUp }) => {
  const [minutes, setMinutes] = useState(Math.floor(timeRemaining / 60));
  const [seconds, setSeconds] = useState(timeRemaining % 60);
  const [isWarning, setIsWarning] = useState(false);

  useEffect(() => {
    setMinutes(Math.floor(timeRemaining / 60));
    setSeconds(timeRemaining % 60);

    // Set warning when less than 2 minutes remain
    setIsWarning(timeRemaining <= 120);
  }, [timeRemaining]);

  return (
    <div className={`flex items-center p-2 rounded-md ${
      isWarning ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
    }`}>
      <Clock className={`h-5 w-5 mr-2 ${isWarning ? 'animate-pulse' : ''}`} />
      <span className="font-mono">
        {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </span>
    </div>
  );
};

export default Timer;