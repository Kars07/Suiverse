let secretKey = raw.slice(1);
    let keypair = Ed25519Keypair.fromSecretKey(secretKey);

    console.log(`keypair: ${keypair.getKeyScheme()}`)
    console.log(`publicKey: ${keypair.getPublicKey().toSuiAddress()}`)
    console.log(`privateKey: ${keypair.export().privateKey}`);