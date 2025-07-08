export default function AnswerCard({ answer, citations }) {
  return (
    <div className="mt-6 p-4 border rounded shadow">
      <h2 className="text-lg font-bold mb-2">Answer:</h2>
      <p>{answer}</p>

      <div className="mt-4">
        <h3 className="font-medium">Citation:</h3>
        {citations.map((citation, index) => (
          <div key={index} className="mt-2">
            <p className="italic">"{citation.text}"</p>
            <a
              href={citation.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {citation.source}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
