"use client";

import { useUser } from "@clerk/nextjs";
import { ReadonlyURLSearchParams, useRouter } from "next/navigation";
import React, { useCallback, useEffect } from "react";
import { number } from "zod";

const useCheckoutNavigation = () => {
  const router = useRouter();
  const searchParams = new ReadonlyURLSearchParams();
  const { isLoaded, isSignedIn } = useUser();

  const courseId = searchParams.get("id") ?? "";
  const checkoutStep = parseInt(searchParams.get("step") ?? "1", 10);

  const navigateToStep = useCallback(
    (step: number) => {
      const newStep = Math.min(Math.max(1, step), 3);
      const showSignUp = isSignedIn ? "true" : "false";

      router.push(
        `/checkout?step${newStep}&id=${courseId}&showSignUp=${showSignUp}`,
        { scroll: false }
      );
    },
    [courseId, isSignedIn, router]
  );

  useEffect(() => {
    if (isLoaded && !isSignedIn && checkoutStep > 1) {
      navigateToStep(1);
    }
  }, [isLoaded, isSignedIn, checkoutStep, navigateToStep]);

  return { checkoutStep, navigateToStep };
};

export default useCheckoutNavigation;
