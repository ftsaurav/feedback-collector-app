package com.feedback.example.feedback.Controller;

import com.feedback.example.feedback.Entity.Feedback;
import com.feedback.example.feedback.Service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://192.168.1.37:5175")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    @PostMapping("/feedback")
    public Feedback submitFeedback(@RequestBody Feedback feedback) {
        return feedbackService.save(feedback);
    }

    @GetMapping("/feedbacks")
    public List<Feedback> getAllFeedbacks() {
        return feedbackService.getAllFeedbacks();
    }

    @GetMapping("/error")
    public String error() {
        return "Error page";
    }
}
