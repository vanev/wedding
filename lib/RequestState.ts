export type InProgress = {
  _tag: "InProgress";
};

export const inProgress: InProgress = {
  _tag: "InProgress",
};

export type Complete = {
  _tag: "Complete";
  response: unknown;
};

export const complete = (response: unknown): Complete => ({
  _tag: "Complete",
  response,
});

export type Failed = {
  _tag: "Failed";
  reason: unknown;
};

export const failed = (reason: unknown): Failed => ({
  _tag: "Failed",
  reason,
});

export type RequestState = InProgress | Complete | Failed;

export const extract =
  <T>(
    onInProgress: () => T,
    onComplete: (response: unknown) => T,
    onFailed: (reason: unknown) => T,
  ) =>
  (state: RequestState): T => {
    switch (state._tag) {
      case "InProgress":
        return onInProgress();
      case "Complete":
        return onComplete(state.response);
      case "Failed":
        return onFailed(state.reason);
    }
  };
