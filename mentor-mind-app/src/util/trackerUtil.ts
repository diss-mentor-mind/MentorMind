import { track } from "@amplitude/analytics-browser";
import { load } from "./localStorage";

/**
 * Track a page view event with Amplitude.
 */
export const trackPageView = (pageName: string): void => {
  const userRole: String = load("userRole");
  const userId: String = load("userId");
  const userName: String = load("userName");
  try {
    track(pageName, {
      page: pageName,
      eventName: "PageView",
      userRole: userRole,
      userId: userId,
      userName: userName,
    });
  } catch (error) {
    console.log("Error while tracking data: " + error);
  }
};

/**
 * Track a button click event with Amplitude.
 */
export const trackButtonClick = (buttonName: string): void => {
  const userRole: String = load("userRole");
  const userId: String = load("userId");
  const userName: String = load("userId");
  try {
    track(buttonName, {
      button: buttonName,
      eventName: "ButtonClick",
      userRole: userRole,
      userId: userId,
      userName: userName,
    });
  } catch (error) {
    console.log("Error while tracking data: " + error);
  }
};
