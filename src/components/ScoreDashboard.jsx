export default function ScoreDashboard({ score }) {

  return (
    <div className="score-dashboard">

      <h2>AI Resume Score</h2>

      <div className="score-circle">

        {score ? score : 0}

      </div>

      <p>

        {score
          ? "Resume analyzed successfully"
          : "Upload resume to see your score"}

      </p>

    </div>
  );

}