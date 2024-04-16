import { app, InvocationContext, Timer } from "@azure/functions";

export async function timerTrigger1(myTimer: Timer, context: InvocationContext): Promise<void> {
    context.log('Timer function processed request.');
    context.log(`Timer is running at ${new Date().toISOString()}`);
}

app.timer('timerTrigger1', {
    schedule: '0 */1 * * * *',
    handler: timerTrigger1
});
