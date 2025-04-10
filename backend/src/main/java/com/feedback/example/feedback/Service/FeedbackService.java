package com.feedback.example.feedback.Service;

import com.feedback.example.feedback.Entity.Feedback;
import com.feedback.example.feedback.Repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedbackService {

    @Autowired
    private FeedbackRepository feedbackRepository;

    public Feedback save(Feedback feedback)
    {
        return feedbackRepository.save(feedback);
    }

    public List<Feedback> getAllFeedbacks()
    {
        return feedbackRepository.findAll();
    }
}
