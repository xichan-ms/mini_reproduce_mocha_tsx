
import {ssz} from "@lodestar/types";

function calculateBeaconHeaderRoot(beaconHeaderObj){
    let header = ssz.phase0.BeaconBlockHeader.fromJson(beaconHeaderObj)
    let headerRootUint8Array = ssz.phase0.BeaconBlockHeader.hashTreeRoot(header)

    let headerRootBuffer = Buffer.from(headerRootUint8Array)
    let headerRootHex = headerRootBuffer.toString('hex').padStart(64, '0')

    return "0x" + headerRootHex
}

export {
    calculateBeaconHeaderRoot
}