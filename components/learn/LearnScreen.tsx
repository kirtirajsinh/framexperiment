"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { topics } from "@/utils/LearnModule";

const LearnScreen = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showCode, setShowCode] = useState(false);
  const { width, height } = useWindowSize();

  const router = useRouter();

  const isCompleted = currentStep === topics.length - 1;

  const goNext = () => {
    if (currentStep < topics.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  const { title, component: Component, code } = topics[currentStep];

  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {isCompleted && (
        <>
          <Confetti
            width={width}
            height={height}
            recycle={false}
            numberOfPieces={500}
          />
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              padding: "2rem",
              borderRadius: "10px",
              zIndex: 1000,
              boxShadow: "0 0 20px rgba(0,0,0,0.2)",
            }}
          >
            <h2 style={{ color: "#007bff", marginBottom: "1rem" }}>
              🎉 Congratulations!
            </h2>
            <p className="text-black">You now know the basics of Frames v2!</p>
          </div>
        </>
      )}
      {/* Progress Visualizer */}
      <div style={{ marginBottom: "20px" }}>
        <h1>
          Topic {currentStep + 1} of {topics.length}
        </h1>
        <h2>{title}</h2>
        <div
          style={{
            height: "20px",
            width: "80%",
            backgroundColor: "#f3f3f3",
            margin: "auto",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${((currentStep + 1) / topics.length) * 100}%`,
              backgroundColor: "#4caf50",
              transition: "width 0.3s ease",
            }}
          />
        </div>
      </div>

      {/* Show Description or Component */}
      <div
        style={{
          marginBottom: "20px",
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <p>{topics[currentStep].description}</p>
      </div>

      {/* Current Topic Content */}
      {Component ? (
        <div
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "10px",
            minHeight: "200px",
            marginBottom: "20px",
          }}
        >
          <Component />
        </div>
      ) : (
        <></>
      )}

      {/* Code Snippet */}

      {
        <button
          onClick={() => setShowCode(!showCode)}
          style={{
            padding: "10px 20px",
            backgroundColor: showCode ? "#ccc" : "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {showCode ? "Hide Code" : "Show Code"}
        </button>
      }
      {showCode && (
        <div
          style={{
            textAlign: "left",
            backgroundColor: "#f7f7f7",
            padding: "20px",
            borderRadius: "10px",
            overflowX: "auto",
          }}
        >
          <h3>Code:</h3>
          <pre
            style={{ whiteSpace: "pre-wrap", fontSize: "14px", color: "#333" }}
          >
            {code}
          </pre>
        </div>
      )}
      {/* <div
        style={{
          textAlign: "left",
          backgroundColor: "#f7f7f7",
          padding: "20px",
          borderRadius: "10px",
          overflowX: "auto",
        }}
      >
        <h3>Code:</h3>
        <pre
          style={{ whiteSpace: "pre-wrap", fontSize: "14px", color: "#333" }}
        >
          {code}
        </pre>
      </div> */}

      {/* Navigation Buttons */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={goBack}
          disabled={currentStep === 0}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            backgroundColor: currentStep === 0 ? "#ccc" : "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: currentStep === 0 ? "not-allowed" : "pointer",
          }}
        >
          Back
        </button>
        <button
          onClick={goNext}
          disabled={currentStep === topics.length - 1}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            backgroundColor:
              currentStep === topics.length - 1 ? "#ccc" : "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor:
              currentStep === topics.length - 1 ? "not-allowed" : "pointer",
          }}
        >
          Next
        </button>
        <button
          onClick={() => router.push("/")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default LearnScreen;
