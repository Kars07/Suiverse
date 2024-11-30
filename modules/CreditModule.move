module credit_module {
    use sui::object::{Self, UID};
    use sui::tx_context::{self, TxContext};

    struct CreditScore has key {
        id: UID,
        user: address,
        score: u64,                // Credit score (e.g., 600–850)
        loan_history: vector<u64>, // List of completed loan IDs
    }

    public fun initialize_score(user: &signer, ctx: &mut TxContext): CreditScore {
        CreditScore {
            id: UID::new(ctx),
            user: signer::address_of(user),
            score: 600, // Default starting credit score
            loan_history: vector::empty(),
        }
    }

    public fun update_score(score: &mut CreditScore, loan_id: u64, is_repaid: bool) {
        vector::push_back(&mut score.loan_history, loan_id);

        if (is_repaid) {
            score.score = std::math::min(score.score + 20, 850); // Boost on successful repayment
        } else {
            score.score = std::math::max(score.score - 50, 300); // Penalty on failure
        }
    }

    public fun get_score(score: &CreditScore): u64 {
        score.score
    }

    public fun get_loan_history(score: &CreditScore): &vector<u64> {
        &score.loan_history
    }
}
