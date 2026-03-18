"use client";

export interface TrustScoreProps {
  score?: number;
  flags?: string;
  description?: string;
  className?: string;
}

/**
 * Returns the arc color based on score:
 * - >= 70: brand-green (#63fc9f)
 * - >= 40: yellow (#facc15)
 * - < 40:  red (#ef4444)
 */
function getArcColor(score: number): string {
  if (score >= 70) return "#63fc9f";
  if (score >= 40) return "#facc15";
  return "#ef4444";
}

const TrustScore: React.FC<TrustScoreProps> = ({
  score = 98,
  flags = "None",
  description,
  className = "",
}) => {
  const clampedScore = Math.max(0, Math.min(100, score));
  const arcColor = getArcColor(clampedScore);

  let defaultDesc = "poor";
  if (clampedScore >= 70) defaultDesc = "excellent";
  else if (clampedScore >= 40) defaultDesc = "average";

  const finalDescription =
    description || `Your On-Chain Reputation is ${defaultDesc}.`;

  // SVG arc math — semi-circle from left to right
  const radius = 38;
  const circumference = Math.PI * radius; // half-circle length
  const progress = (clampedScore / 100) * circumference;

  return (
    <div
      className={`flex w-full flex-col overflow-hidden rounded-2xl border border-card-border bg-card-bg p-6 md:p-8 lg:h-full lg:justify-center ${className}`}
    >
      <div className="flex items-center gap-6 md:gap-8">
        {/* Left: Text Content */}
        <div className="flex min-w-0 flex-1 flex-col gap-8 md:gap-10">
          {/* Trust Score Info */}
          <div className="flex flex-col gap-2">
            <h3 className="font-utsaha text-xl leading-tight text-white md:text-2xl">
              Trust Score
            </h3>
            <p className="font-utsaha text-sm leading-relaxed text-[#95959d] md:text-base">
              {finalDescription}
            </p>
          </div>

          {/* No of Flags */}
          <div className="flex flex-col gap-2">
            <h4 className="font-utsaha text-lg leading-tight text-white md:text-xl">
              No of Flags
            </h4>
            <p className="font-utsaha text-sm text-[#95959d] md:text-base">
              {flags}
            </p>
          </div>
        </div>

        {/* Right: Gauge inside rounded border box, vertically centered */}
        <div className="flex flex-shrink-0 items-center justify-center">
          <div className="flex h-[150px] w-[120px] flex-col items-center justify-center gap-2 rounded-2xl border border-[#2a2b30] bg-[#0a0a0f] md:h-[180px] md:w-[150px]">
            {/* Percentage number */}
            <span className="font-utsaha text-2xl font-medium text-[#0553fd] md:text-3xl">
              {clampedScore}%
            </span>

            {/* Arc meter */}
            <div className="h-[50px] w-[90px] md:h-[60px] md:w-[110px]">
              <svg
                viewBox="0 0 100 55"
                className="h-full w-full"
                style={{ overflow: "visible" }}
                role="img"
                aria-labelledby="trustscore-title"
              >
                <title id="trustscore-title">Trust score gauge</title>
                {/* Background arc (dark track) */}
                <path
                  d="M 12 50 A 38 38 0 0 1 88 50"
                  fill="none"
                  stroke="#1a1a2e"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
                {/* Progress arc (solid color) */}
                <path
                  d="M 12 50 A 38 38 0 0 1 88 50"
                  fill="none"
                  stroke={arcColor}
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeDasharray={`${progress} ${circumference}`}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustScore;
