// prettier-none
export const steps = `[
  {
    icon: <>👋</>,
    title: "Step 1",
    content: <>This is the first step</>,
    selector: "#onborda-step1",
    side: "top",
    showControls: true,
    pointerPadding: 10,
    pointerRadius: 10,
    nextRoute: "/foo",
    prevRoute: "/bar"
  }
]`;

// prettier-none
export const customCards = `// YourCard.tsx
<div>
  <h1>{step.icon} {step.title}</h1>
  <h2>{currentStep} of {totalSteps}</h2>
  <p>{step.content}</p>
  <button onClick={prevStep}>Previous</button>
  <button onClick={nextStep}>Next</button>
  {arrow}
</div>`;

// prettier-none
export const provider = `// layout.tsx
<OnbordaProvider>
  <Onborda  
    showOnborda
    steps={steps} 
    cardComponent={YourCard}
    shadowRgb="255, 0, 0"
    shadowOpacity="0.5"
  >
    {children}
  </Onborda>
</OnbordaProvider>`;
