"use client"
import { JitsiMeeting } from "@jitsi/react-sdk";
import Image from "next/image";

export default function Home() {
  return (
    <JitsiMeeting
      domain={"meet.jit.si"}
      roomName={"my_room"}
      configOverwrite={{
        startWithAudioMuted: false,
        disableModeratorIndicator: true,
        enableEmailInStats: false,
        disableSimulcast: false,
      }}
      interfaceConfigOverwrite={{
        DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
        filmStripOnly: false,
        SHOW_JITSI_WATERMARK: false,
        SHOW_WATERMARK_FOR_GUEST: false,
      }}
      userInfo={{
        displayName: "Liaqat",
      }}
      getIFrameRef={(iframeRef) => {
        iframeRef.style.height = "100vh";
      }}
    />
  );
}
