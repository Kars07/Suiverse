module ddi_module {
    use sui::object::{Self, UID};
    use sui::tx_context::{Self, TxContext};

    struct DDI has key, store {
        id: UID,
        owner: address,
        gov_id: vector<u8>,         // Government-issued ID
        biometric_hash: vector<u8>, // Biometric data hash
        kyc_status: bool,           // KYC verification status
    }

    public fun create_ddi(ctx: &mut TxContext): DDI {
        DDI {
            id: UID::new(ctx),
            owner: tx_context::sender(ctx),
            gov_id: vector::empty<u8>(),
            biometric_hash: vector::empty<u8>(),
            kyc_status: false, // Default: KYC not verified
        }
    }

    public fun verify_kyc(ddi: &mut DDI, gov_id: vector<u8>, biometric_hash: vector<u8>) {
        assert!(ddi.kyc_status == false, "KYC is already verified!");
        ddi.gov_id = gov_id;
        ddi.biometric_hash = biometric_hash;
        ddi.kyc_status = true; // Mark as verified
    }

    public fun update_biometric(ddi: &mut DDI, new_biometric_hash: vector<u8>) {
        assert!(ddi.kyc_status == true, "KYC must be verified first!");
        ddi.biometric_hash = new_biometric_hash;
    }

    public fun is_verified(ddi: &DDI): bool {
        ddi.kyc_status
    }
}
