import { Star } from 'lucide-react';

export default function HUD({ score, addedPoints, popKey }) {
  return (
    <div className="hud">
      <div key={`score-${popKey}`} className="score-box animate-pop">
        <Star size={20} strokeWidth={2.5} />
        <span style={{ marginLeft: '6px' }}>{score}</span>
      </div>
      {addedPoints > 0 && (
        <div key={`added-${popKey}`} className="score-added">
          +{addedPoints}
        </div>
      )}
    </div>
  );
}
