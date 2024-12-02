module 0x0::credit_module {
    use sui::tx_context; // Correct usage of tx_context
    use sui::object; // Correct usage of UID

    public struct CreditScore has key {
        id: object::UID,
        user: address,
        score: u64,
        loan_history: vector<u64>,
    }

    /// Initialize a new credit score for a user.
    public fun initialize_score(ctx: &mut tx_context::TxContext): CreditScore {
        CreditScore {
            id: object::new(ctx), // Correct UID instantiation
            user: tx_context::sender(ctx),
            score: 600,           // Default score
            loan_history: vector::empty(),
        }
    }

    /// Update the credit score after a loan repayment or default.
    public fun update_score(score: &mut CreditScore, loan_id: u64, is_repaid: bool) {
        vector::push_back(&mut score.loan_history, loan_id);

        if (is_repaid) {
            // If repayment is successful
            if (score.score + 20 > 850) {
                score.score = 850; // Cap score at 850
            } else {
                score.score = score.score + 20; // Corrected addition
            }
        } else {
            // If repayment fails
            if (score.score >= 50) {
                score.score = score.score - 50;
            } else {
                score.score = 300; // Minimum score
            }
        }
    }

    /// Get the current credit score.
    public fun get_score(score: &CreditScore): u64 {
        score.score
    }
}
