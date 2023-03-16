import * as common from './common'
import chai from 'chai'
const assert = chai.assert

describe("common test cases", function() {
    
    it("beacon header root calculation", async () => {
        let beaconHeaderObj = 
        {
            "slot": "3670245",
            "proposer_index": "153123",
            "parent_root": "0xe5bb2ecda7072c9bf49f3aabaabeedee18849692fe0beed358c1b3f10cb7abc1",
            "state_root": "0xe19b4b78f15df658119cd1ed2ae5e573016e2c35958a7256ca59cfe62a62c35e",
            "body_root": "0x1f2067de6c1445689af239c5c1d0cfda90020d9c8d8eaed3a036e2509dc93bac"
        }

        let beaconHeaderRootHex = common.calculateBeaconHeaderRoot(beaconHeaderObj)

        let expectedBeaconHeaderRootHex = "0x4bba374e78b481756edbfbb38e7dcd449e498170a8c58733ca739e75f1b3b711"
        assert(beaconHeaderRootHex == expectedBeaconHeaderRootHex)
    });
    
});