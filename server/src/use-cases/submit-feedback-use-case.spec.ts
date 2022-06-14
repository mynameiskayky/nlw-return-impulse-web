import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    const submimtFeedback = new SubmitFeedbackUseCase(
      {create: async () => {}},
      {sendMail: async () => {}}
    )

    await expect(submimtFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'test.jpg'
    })).resolves.not.toThrow()
  })
})