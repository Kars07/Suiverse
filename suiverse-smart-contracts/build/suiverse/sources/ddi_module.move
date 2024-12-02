module 0x0::ddi_module {
    use sui::tx_context; // Removed alias for tx_context as it is already imported by default
    use sui::object; // Removed alias for UID as it is already imported by default

    public struct DDI has key {
        id: object::UID,
        owner: address,
        gov_id: vector<u8>,
        biometric_hash: vector<u8>,
        kyc_status: bool,
    }

    /// Create a new Digital Decentralized Identity (DDI).
    public fun create_ddi(ctx: &mut tx_context::TxContext): DDI {
        DDI {
            id: object::new(ctx), // Correct UID instantiation
            owner: tx_context::sender(ctx),
            gov_id: vector::empty(),
            biometric_hash: vector::empty(),
            kyc_status: false,
        }
    }

    /// Verify KYC for the DDI.
    public fun verify_kyc(ddi: &mut DDI, gov_id: vector<u8>, biometric_hash: vector<u8>) {
        assert!(!ddi.kyc_status, 1); // Abort if KYC is already verified
        ddi.gov_id = gov_id;
        ddi.biometric_hash = biometric_hash;
        ddi.kyc_status = true;
    }
}
