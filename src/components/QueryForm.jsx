import { useState } from "react";

export default function QueryForm({ onSubmit }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await onSubmit(query);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your legal question..."
        rows="4"
        className="w-full border p-3 rounded mb-4"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? "Loading..." : "Submit"}
      </button>
    </form>
  );
}
