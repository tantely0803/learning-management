"use client";

import CompletionPage from "@/app/(nondashboard)/checkout/completion";
import CheckoutDetailPage from "@/app/(nondashboard)/checkout/details";
import PaymentPage from "@/app/(nondashboard)/checkout/payment";
import Loading from "@/components/Loading";
import WizardStepper from "@/components/WizardStepper";
import useCheckoutNavigation from "@/hooks/useCheckoutNavigation";
import { useUser } from "@clerk/nextjs";
import React from "react";

const CheckoutWizard = () => {
  const { isLoaded } = useUser();
  const { checkoutStep } = useCheckoutNavigation();

  if (!isLoaded) return <Loading />;

  const renderStep = () => {
    switch (checkoutStep) {
      case 1:
        return <CheckoutDetailPage />;
      case 2:
        return <PaymentPage />;
      case 3:
        return <CompletionPage />;
      default:
        return <CheckoutDetailPage />;
    }
  };

  return (
    <div className="checkout">
      <WizardStepper currentStep={checkoutStep} />
      <div className="checkout__content">{renderStep()}</div>
    </div>
  );
};

export default CheckoutWizard;
