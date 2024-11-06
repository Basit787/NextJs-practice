import { z } from "zod";

export const DialogAction = z.object({
  open: z.boolean(),
  title: z.string(),
  description: z.string(),
  actionText: z.string().optional(),
  cancelText: z.string().optional(),
  onAction: z.function().args().returns(z.void()),
  onCancel: z.function().args().returns(z.void()),
});

export type DialogActions = z.infer<typeof DialogAction>;
