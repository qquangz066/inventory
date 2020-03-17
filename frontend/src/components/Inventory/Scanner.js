import React, { useEffect } from "react";
import Quagga from "quagga";
let config = {
  inputStream: {
    type: "LiveStream",
  },
  locator: {
    patchSize: "medium",
    halfSample: true
  },
  numOfWorkers: 0,
  frequency: 10,
  decoder: {
    readers: [
      "ean_reader",
      "ean_8_reader",
      "code_39_reader",
      "code_39_vin_reader",
      "codabar_reader",
      "upc_reader",
      "upc_e_reader"
    ]
  },
  locate: true
};

const Scanner = props => {
  const { onDetected, zoom } = props;

  useEffect(() => {
    Quagga.init(config, err => {
      if (err) {
        console.log(err, "error msg");
      }
      var track = Quagga.CameraAccess.getActiveTrack();
      if (track && typeof track.getCapabilities === "function") {
        let capabilities = track.getCapabilities();
        let step = (capabilities.zoom.max - capabilities.zoom.min) / 6;
        track.applyConstraints({
          advanced: [
            {
              zoom: capabilities.zoom.min + step * (zoom - 1)
            }
          ]
        });
      }
      Quagga.start();
      return () => {
        Quagga.stop();
      };
    });

    //detecting boxes on stream
    Quagga.onProcessed(result => {
      var drawingCtx = Quagga.canvas.ctx.overlay,
        drawingCanvas = Quagga.canvas.dom.overlay;

      if (result) {
        if (result.boxes) {
          drawingCtx.clearRect(
            0,
            0,
            Number(drawingCanvas.getAttribute("width")),
            Number(drawingCanvas.getAttribute("height"))
          );
          result.boxes
            .filter(function(box) {
              return box !== result.box;
            })
            .forEach(function(box) {
              Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
                color: "green",
                lineWidth: 2
              });
            });
        }

        if (result.box) {
          Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, {
            color: "#00F",
            lineWidth: 2
          });
        }

        if (result.codeResult && result.codeResult.code) {
          Quagga.ImageDebug.drawPath(
            result.line,
            { x: "x", y: "y" },
            drawingCtx,
            { color: "red", lineWidth: 3 }
          );
        }
      }
    });

    Quagga.onDetected(detected);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [zoom]);

  const detected = result => {
    onDetected(result.codeResult.code);
  };

  return (
    // If you do not specify a target,
    // QuaggaJS would look for an element that matches
    // the CSS selector #interactive.viewport
    <div id="interactive" className="viewport" />
  );
};

export default Scanner;
