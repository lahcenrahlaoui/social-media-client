import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Comment from "./Comment";

import Button from "@mui/material/Button";
import { Avatar, Divider, Grid, Link, Paper } from "@mui/material";

const Comments = ({ commentId, item, seeComments }) => {
    const [commentData, setCommentData] = useState([]);
    const [skipValue, SetSkipValue] = useState(0);

    const fetchData = () => {
        if (seeComments) {
            (async () => {
                const response = await axios.get(`/api/comments/post/`, {
                    params: { postId: item._id, skip: skipValue },
                });

                setCommentData((prevState) => {
                    return prevState.concat(response.data);
                });
            })();
            SetSkipValue((state) => state + 3);
        }
    };

    useEffect(() => {
        if (!skipValue) {
            fetchData();
        }
    }, [seeComments]);

    const renderComments = commentData.map((comment, idx) => {
        return (
            <React.Fragment key={idx}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar alt="Remy Sharp" src={""} />
                    </Grid>
                    <Grid justifyContent="left" item xs zeroMinWidth>
                        <h4 style={{ margin: 0, textAlign: "left" }}>
                            Michel Michel
                        </h4>
                        <p style={{ textAlign: "left" }}>{comment.content}</p>
                        <p style={{ textAlign: "left", color: "gray" }}>
                            posted 1 minute ago
                        </p>
                    </Grid>
                </Grid>
                <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
            </React.Fragment>
        );
    });

    return (
        <div className=" gap-2  cursor-pointer  ">
            <div>
                <Paper style={{ padding: "40px 20px" }}>
                    {renderComments}
                    <div className="float-right ">
                        <Link
                            component="button"
                            variant="body2"
                            underline="hover"
                            onClick={fetchData}
                        >
                            load more
                        </Link>
                    </div>
                </Paper>
            </div>
        </div>
    );
};

export default Comments;
