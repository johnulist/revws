// @flow
import type { ReviewType } from 'types';

export type SetReviewAction = {
  type: 'SET_REVIEW',
  review: ReviewType
}

export type TriggerCreateReviewAction = {
  type: 'TRIGGER_CREATE_REVIEW'
};

export type CloseEditReviewAction = {
  type: 'CLOSE_EDIT_REVIEW'
};

export type UpdateReviewDetailsAction = {
  type: 'UPDATE_REVIEW_DETAILS',
  review: ReviewType
};

export type SaveReviewAction = {
  type: 'SAVE_REVIEW',
  review: ReviewType
};

export type SaveReviewCompletedAction = {
  type: 'SAVE_REVIEW_COMPLETED',
  saved: boolean
}

export type TriggerEditReviewAction = {
  type: 'TRIGGER_EDIT_REVIEW',
  review: ReviewType
};

export type TriggerDeleteReviewAction = {
  type: 'TRIGGER_DELETE_REVIEW',
  review: ReviewType
};

export type DeleteReviewAction = {
  type: 'DELETE_REVIEW',
  id: number
};

export type CloseDeleteReviewAction = {
  type: 'CLOSE_DELETE_REVIEW'
};

export type TriggerReportReviewAction = {
  type: 'TRIGGER_REPORT_REVIEW',
  review: ReviewType
};

export type TriggerVoteAction = {
  type: 'TRIGGER_VOTE',
  review: ReviewType,
  direction: 'up' | 'down'
};

export type SetSnackbarAction = {
  type: 'SET_SNACKBAR',
  message: ?string
}

export type Action = (
  SetReviewAction |
  TriggerCreateReviewAction |
  CloseEditReviewAction |
  UpdateReviewDetailsAction |
  SaveReviewAction |
  SaveReviewCompletedAction |
  TriggerEditReviewAction |
  TriggerDeleteReviewAction |
  DeleteReviewAction |
  CloseDeleteReviewAction |
  TriggerReportReviewAction |
  TriggerVoteAction |
  SetSnackbarAction
);
