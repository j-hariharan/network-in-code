'use client';

import { useEffect, useState } from 'react';
import { eventEnd, eventStart } from '../constants';

export const EventCountDown = () => {
  const [eventHasStarted, setEventHasStarted] = useState(false);
  const [eventHasEnded, setEventHasEnded] = useState(false);

  const calculateTimeLeft = () => {
    const currentTime = new Date().getTime();
    const remainingTime = eventStart - currentTime > 0 ? eventStart - currentTime : 0;

    const remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const remainingHours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const remainingMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const remainingSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    return {
      remainingTime,
      remainingDays,
      remainingHours,
      remainingMinutes,
      remainingSeconds,
    };
  };

  useEffect(() => {
    const currentTime = new Date().getTime();
    setEventHasStarted(currentTime > eventStart);
    setEventHasEnded(currentTime > eventEnd);
  }, []);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Component is now mounted

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  if (!isMounted) {
    // Render nothing on the server to avoid hydration mismatch
    return null;
  }

  return (
    <div className="flex justify-center items-center mb-20 gap-4 flex-col md:flex-row">
      <div className="flex items-center justify-center gap-4 p-4 bg-black rounded-lg shadow-lg">
        <div className="flex flex-col items-center justify-center gap-1">
          <span className="font-bold text-6xl text-red-600">{timeLeft.remainingDays}</span>
          <span className="font-normal text-sm text-white opacity-80">Days</span>
        </div>
        <span className="font-bold text-2xl text-white">:</span>
        <div className="flex flex-col items-center justify-center gap-1">
          <span className="font-bold text-6xl text-red-600">{timeLeft.remainingHours}</span>
          <span className="font-normal text-sm text-white opacity-80">Hours</span>
        </div>
        <span className="font-bold text-2xl text-white">:</span>
        <div className="flex flex-col items-center justify-center gap-1">
          <span className="font-bold text-6xl text-red-600">{timeLeft.remainingMinutes}</span>
          <span className="font-normal text-sm text-white opacity-80">Minutes</span>
        </div>
        <span className="font-bold text-2xl text-white">:</span>
        <div className="flex flex-col items-center justify-center gap-1">
          <span className="font-bold text-6xl text-red-600">{timeLeft.remainingSeconds}</span>
          <span className="font-normal text-sm text-white opacity-80">Seconds</span>
        </div>
      </div>

      {
        timeLeft.remainingTime !== 0 ? (
          <div className="flex flex-col items-center justify-center gap-1 ml-4">
            <span className="font-bold text-2xl text-white">Remaining</span>
            <span className="font-normal text-sm text-white opacity-80">for the event</span>

            <button
              type="button"
              className="mt-4 py-2 px-4 bg-red-600 text-white rounded-lg"
              onClick={() => {
                if (eventHasStarted) {
                  window.open('https://codered-ieee.nitk.ac.in/login');
                } else if (eventHasEnded) {
                  // Do nothing
                } else {
                  window.open('https://unstop.com/o/zspXwvc?utm_medium=Share&utm_source=shortUrl');
                }
              }}
            >
              {
                eventHasStarted ? eventHasEnded ? 'Event Ended' : 'Join Event'
                  : 'Register Now'
              }
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-1 ml-4">
            <span className="font-bold text-2xl text-white">Event</span>
            <span className="font-normal text-sm text-white opacity-80">
              {
                eventHasEnded ? 'has ended' : 'is live'
              }
            </span>
            {
              eventHasEnded ? null : (
                <button
                  type="button"
                  className="mt-4 py-2 px-4 bg-red-600 text-white rounded-lg"
                  onClick={() => {
                    window.open('https://codered-ieee.nitk.ac.in/login');
                  }}
                >
                  Join Event
                </button>
              )
            }
          </div>
        )
      }
    </div>
  );
};
