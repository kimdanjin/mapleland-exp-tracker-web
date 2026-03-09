import { useCallback, useEffect, useRef } from "react";
import { PipController } from "./PipController";
import type { PipCallbacks, PipState } from "./types";

export function isDocumentPipSupported(): boolean {
  if (typeof window === "undefined") return false;
  const dpi = (window as any).documentPictureInPicture;
  return !!(dpi && typeof dpi.requestWindow === "function");
}



export function useDocumentPip(callbacks: PipCallbacks) {
  const controllerRef = useRef<PipController | null>(null);
  const cbRef = useRef<PipCallbacks>(callbacks);
  useEffect(() => { cbRef.current = callbacks; }, [callbacks]);




  // 필요할 때만 컨트롤러를 생성합니다.
  const ensure = useCallback(() => {
    if (!controllerRef.current) {
      controllerRef.current = new PipController({
        onToggle: () => cbRef.current.onToggle(),
        onReset: () => cbRef.current.onReset(),
        onApiTest: () => cbRef.current.onApiTest()
      });
    } else {
      controllerRef.current.setCallbacks({
        onToggle: () => cbRef.current.onToggle(),
        onReset: () => cbRef.current.onReset(),
        onApiTest: () => cbRef.current.onApiTest()
      });
    }
    return controllerRef.current;
  }, []);

  const open = useCallback(async () => {
    const c = ensure();
    await c.open();
  }, [ensure]);

  const update = useCallback((state: PipState) => {
    const c = ensure();
    c.update(state);
  }, [ensure]);

  const close = useCallback(() => {
    controllerRef.current?.close();
    controllerRef.current = null;
  }, []);

  useEffect(() => {
    return () => {
      controllerRef.current?.close();
      controllerRef.current = null;
    };
  }, []);

  // toast 표시 기능 추가
  const showToast = useCallback((message: string, duration: number = 2000) => {
    const c = ensure();
    c.showToast(message, duration); // PipController의 showToast는 이미 두 개를 받도록 설계되어 있습니다.
  }, [ensure]);

  return { open, update, close, isOpen: () => !!controllerRef.current?.isOpen(),showToast };
}

