import { useState, useEffect } from 'react';

interface Iprops {
  stats1: number;
  stats2: number;
  value1: string;
  value2: string;
}
function useCountAnimation(startCount: number, endCount: number, animationDuration: number) {
  const [count, setCount] = useState(startCount);

  useEffect(() => {
    const frameDuration = 1000 / 60; // 60 frames per second
    const totalFrames = Math.round(animationDuration / frameDuration);

    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.round(startCount + progress * (endCount - startCount));
      setCount(currentCount);

      if (frame === totalFrames) {
        clearInterval(interval);
      }
    }, frameDuration);

    return () => clearInterval(interval);
  }, [startCount, endCount, animationDuration]);

  return count;
}
const StatsItem: React.FC<Iprops> = (props: Iprops) => {
  const count1 = useCountAnimation(0, props.stats1, 1000);
  const count2 = useCountAnimation(0, props.stats2, 1000);
  return (
    <>
      <div className="col-sm-6 stats_item">
		    <p className="stats_value">{count1.toLocaleString()}</p>
		    <p className="stats_text">{props.value1}</p>
	    </div>
	    <div className="col-sm-6 stats_item">
		    <p className="stats_value">{count2.toLocaleString()}</p>
		    <p className="stats_text">{props.value2}</p>
	    </div>
    </>
  )
}

export default StatsItem
