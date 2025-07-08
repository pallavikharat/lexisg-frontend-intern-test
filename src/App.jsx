import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    
    setTimeout(() => {
      setResponse({
        answer:
          "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
        citations: [
          {
            text:
              "“as the age of the deceased at the time of accident was held to be about 54-55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.” (Para 7 of the document)",
            source: "Dani_Devi_v_Pritam_Singh.pdf",
            link:
              "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz",
          },
        ],
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-700 mb-6">
          Lexi Legal Assistant
        </h1>

      
        <form onSubmit={handleSubmit} className="mb-6">
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter your legal question..."
            className="w-full h-32 p-4 border border-gray-300 rounded-lg resize-none"
            required
          />
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            disabled={loading}
          >
            {loading ? "Generating Answer..." : "Submit"}
          </button>
        </form>

       
        {response && (
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Answer:</h2>
            <p className="text-gray-700 mb-4">{response.answer}</p>

            <div className="text-sm text-gray-600 border-t pt-4">
              <span className="font-medium">Citation:</span>{" "}
              <a
                href={response.citations[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                {response.citations[0].text}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
