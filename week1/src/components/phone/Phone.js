import NumberEntry from "./NumberEntry";
import NumPad from "./NumPad";
import Callcenter from "./CallCenter";

import React, { PropTypes } from "react";

const Phone = ({
  status,
  onMuteClick,
  onNumPadNumberClick,
  onNumberEntryChange,
  onHangupClick,
  onCallClick,
  onTransferClick,
  onHoldClick,
  muted,
  callOnHold,
  callSid,
  confSid,
  reservation,
}) => (
  <div id="dialer">
    <NumberEntry entry={onNumberEntryChange} />
    <NumPad buttonPress={onNumPadNumberClick} />
    <Callcenter
      call={onCallClick}
      status={status}
      hangup={onHangupClick}
      muted={muted}
      mute={onMuteClick}
      transfer={onTransferClick}
      callOnHold={callOnHold}
      hold={onHoldClick}
      callSid={callSid}
      confSid={confSid}
      reservation={reservation}
    />
  </div>
);

Phone.propTypes = {};

export default Phone;
