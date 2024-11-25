import { useRecoilTransactionObserver_UNSTABLE } from "recoil";
import { set } from "idb-keyval";

export default function PersistenceObserver() {
  useRecoilTransactionObserver_UNSTABLE(({ snapshot }) => {
    for (const modifiedAtom of snapshot.getNodes_UNSTABLE({
      isModified: true,
    })) {
      const atomLoadable = snapshot.getLoadable(modifiedAtom);
      if (atomLoadable.state === "hasValue") {
        set(modifiedAtom.key, atomLoadable.contents).catch((error) =>
          console.error("Error setting IDB value", error),
        );
      }
    }
  });

  return null;
}

// Usage: <PersistenceObserver />
