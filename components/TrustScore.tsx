"use client";

interface TrustScoreProps {
  score?: number;
  reputation?: string;
  flags?: string;
  className?: string;
}

const TrustScore: React.FC<TrustScoreProps> = ({
  score = 98,
  reputation = "excellent",
  flags = "None",
  className = "",
}) => {
  // Calculate the arc path for the score meter
  const getArcPath = (percentage: number) => {
    const radius = 45;
    const centerX = 52;
    const centerY = 52;
    const startAngle = -180;
    const endAngle = startAngle + (percentage / 100) * 180;

    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const x1 = centerX + radius * Math.cos(startRad);
    const y1 = centerY + radius * Math.sin(startRad);
    const x2 = centerX + radius * Math.cos(endRad);
    const y2 = centerY + radius * Math.sin(endRad);

    const largeArcFlag = percentage > 50 ? 1 : 0;

    return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`;
  };

  // Determine color based on score
  const getScoreColor = (score: number) => {
    if (score >= 80) return "#63fc9f"; // brand-green
    if (score >= 50) return "#fbbf24"; // yellow
    return "#ef4444"; // red
  };

  const scoreColor = getScoreColor(score);

  return (
    <div
      className={`flex w-full flex-col gap-6 rounded-2xl border border-card-border bg-card-bg p-6 backdrop-blur-[2.6px] md:flex-row md:gap-[122px] ${className}`}
    >
      {/* Info Section */}
      <div className="flex w-full flex-col gap-6 font-utsaha md:w-[120px]">
        {/* Trust Score Info */}
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl leading-tight text-white">Trust Score</h3>
          <p className="text-xl leading-relaxed text-[#95959d]">
            Your On-Chain Reputation is {reputation}
          </p>
        </div>

        {/* No of Flags */}
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl leading-tight text-white">No of Flags</h3>
          <p className="text-xl leading-relaxed text-[#95959d]">{flags}</p>
        </div>
      </div>

      {/* Trust Meter */}
      <div className="flex items-center justify-center px-[10px] pt-[46px] pb-[10px] md:justify-start">
        <div className="flex h-[128px] w-[111px] flex-col items-center gap-0.5 rounded-[20px] border border-card-border bg-card-bg px-1 py-6 backdrop-blur-[2.6px]">
          {/* Score Percentage */}
          <p className="font-utsaha text-2xl leading-relaxed text-brand-blue">
            {score}%
          </p>

          {/* Meter Arc */}
          <div className="relative h-[104px] w-[104px]">
            <svg
              width="104"
              height="104"
              viewBox="0 0 104 104"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="-rotate-0 transform"
            >
              {/* Background arc (gray) */}
              <path
                d={getArcPath(100)}
                stroke="#2a2a2a"
                strokeWidth="8"
                strokeLinecap="round"
                fill="none"
              />
              {/* Score arc (colored) */}
              <path
                d={getArcPath(score)}
                stroke={scoreColor}
                strokeWidth="8"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustScore;
