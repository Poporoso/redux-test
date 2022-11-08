import { createAction } from "@reduxjs/toolkit";

export const incrementa = createAction('INCREMENTA', payload => ({payload}))
export const decrementa = createAction('DECREMENTA', payload => ({payload}))