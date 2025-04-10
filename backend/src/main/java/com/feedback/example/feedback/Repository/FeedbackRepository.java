package com.feedback.example.feedback.Repository;

import com.feedback.example.feedback.Entity.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
}
