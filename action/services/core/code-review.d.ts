import { Context } from "probot";
import { GPTEngine } from "../../models/gpt-engine";
export declare class CodeReview {
    ENGINE: string;
    PATH_TO_EXCLUDE: string;
    REPLY_TO_IGNORE: string | null;
    MAX_FILE_PER_PR: number;
    MAX_PATCH_PER_FILE: number;
    LANGUAGE: string;
    CUSTOMIZED_PROMPT: string;
    reviewEngine: GPTEngine;
    constructor();
    review(context: Context<'pull_request.opened' | 'pull_request.synchronize' | 'pull_request.labeled'>): Promise<void>;
    private generatePrompt;
    private isExcluded;
    private preProcessPullRequestContext;
    private getDiffFiles;
    private getCodeReviewResponseFromAI;
    private addCodeReviewToPullRequest;
}