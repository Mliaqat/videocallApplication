"use client";
import LoginPage from "@/components/LoginPage";
import { JitsiMeeting } from "@jitsi/react-sdk";
import { useState } from "react";

const App = ({ children }) => {
  const [showNew, setToggleShowNew] = useState(false);
  const [userData, setUserData] = useState("");

  const handleJitsiIFrameRef2 = (iframeRef) => {
    iframeRef.style.height = "100dvh";
  };

  const generateRoomName = () => userData?.desc ?? "";

  // Multiple instances demo
  const renderNewInstance = () => {
    if (!showNew) {
      return null;
    }

    return (
      <JitsiMeeting
        roomName={generateRoomName()}
        getIFrameRef={handleJitsiIFrameRef2}
        userInfo={{
          displayName: "YOUR_USERNAME",
        }}
      />
    );
  };

  const renderButtons = () => (
    <div style={{ margin: "15px 0" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          type="text"
          title="Click to create a new JitsiMeeting instance"
          style={{
            border: 0,
            borderRadius: "6px",
            fontSize: "14px",
            background: "#3D3D3D",
            color: "white",
            padding: "12px 46px",
            margin: "2px 2px",
          }}
          onClick={() => setToggleShowNew(!showNew)}
        >
          Toggle new instance
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* <h1
        style={{
          fontFamily: "sans-serif",
          textAlign: "center",
        }}
      >
        JitsiMeeting Demo App
      </h1> */}
      {/* 
      {renderButtons()}
      {renderNewInstance()} */}
      {!showNew ? (
        <LoginPage
          setUserData={setUserData}
          setToggleShowNew={setToggleShowNew}
          renderNewInstance={renderNewInstance}
        />
      ) : (
        <JitsiMeeting
          domain={"meet.jit.si"}
          roomName={userData?.desc}
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
            displayName: userData?.name,
          }}
          getIFrameRef={(iframeRef) => {
            iframeRef.style.height = "100vh";
          }}
          onReadyToClose={() => {
            setToggleShowNew(false);
          }}
        />
      )}
    </>
  );
};

export default App;
