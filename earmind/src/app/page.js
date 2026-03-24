"use client";
import { useState } from "react";
import Form from "components/Form/Form.js";
import Result from "components/Result/Result.js";

function App() {
  const [showResult, setShowResult] = useState(false);

  const [filters, setFilters] = useState({
    type: "",
    noise: false,
  });

  return (
    <div>
         {showResult ? (
        <Result
          filters={filters}
          onBack={() => setShowResult(false)}
        />
      ) : (
        <Form
          onNext={(data) => {
            setFilters(data);
            setShowResult(true);
          }}
        />
      )}
    </div>
  );
}

export default App;