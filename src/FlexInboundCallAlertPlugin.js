import { FlexPlugin } from "@twilio/flex-plugin";

const PLUGIN_NAME = "FlexInboundCallAlertPlugin";

export default class FlexInboundCallAlertPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  init(flex, manager) {
    const alertSound = new Audio("https://api.twilio.com/cowbell.mp3");
    alertSound.loop = true;

    const resStatus = [
      "accepted",
      "canceled",
      "rejected",
      "rescinded",
      "timeout",
    ];

    manager.workerClient.on("reservationCreated", (reservation) => {
      console.log(
        `Reservation created: ${reservation.sid} - Status: ${reservation.status}`
      );

      // Play alert only for inbound voice calls
      if (
        reservation.task.taskChannelUniqueName === "voice" &&
        reservation.task.attributes.direction === "inbound"
      ) {
        alertSound.play().catch((error) => {
          console.warn("Error playing alert sound:", error);
        });
      }

      // Stop alert sound on reservation final status
      resStatus.forEach((status) => {
        reservation.on(status, () => {
          console.log(`Reservation ${status}: ${reservation.sid}`);
          alertSound.pause();
          alertSound.currentTime = 0; // reset audio to start
        });
      });
    });
  }
}
